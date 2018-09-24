// Inspired by https://ng-bootstrap.github.io/#/components/typeahead/examples#http

import { Component, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, map, tap, switchMap } from 'rxjs/operators';

const REPO_URL = 'https://api.github.com/search/repositories';
const PARAMS = new HttpParams();

@Injectable()
export class GitHubService {
  constructor(private http: HttpClient) {}

  search(term: string) {
    if (term === '') {
      return of([]);
    }

    return this.http
      .get(REPO_URL, { params: PARAMS.set('q', term) })
      .pipe(
        map(response => response.items) //.map(item => item.name))
      );
  }
}

@Component({
  selector: 'app-typeahead',
  templateUrl: './typeahead.component.html',
  providers: [GitHubService],
  styles: [`.form-control { width: 300px; }`],
})
export class TypeaheadComponent {
  model: any;
  searching = false;
  searchFailed = false;

  constructor(private _service: GitHubService) {}

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this._service.search(term).pipe(
          tap(() => this.searchFailed = false),
          map(results => results.slice(0, 10)),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }))
      ),
      tap(() => this.searching = false)
    )

  formatter = (x: {name: string}) => x.name;
}
