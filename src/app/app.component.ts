import { Component, Injectable, ViewChild } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, map, tap, switchMap } from 'rxjs/operators';

const ISSUES_URL = 'https://api.github.com/search/issues';
const PARAMS = new HttpParams();

@Injectable()
export class GitHubIssuesService {
  constructor(private http: HttpClient) {}

  search(term: string) {
    if (term === '') {
      return of([]);
    }

    return this.http
      .get(ISSUES_URL, { params: PARAMS.set('q', term) })
      .pipe(
        map(response => response.items)
      );
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GitHubIssuesService],
})
export class AppComponent {
  title = 'Search GitHub repositories';

  repo = null;
  issues = [];
  issuesLoaded = false;

  @ViewChild('tabset') tabSet;

  constructor(private _service: GitHubIssuesService) {}

  onSelect(event) {
    this.issues = [];
    this.issuesLoaded = false;
    this.tabSet.select('details');
    this.repo = event.item;
  }

  onTabChange(event) {
    if (event.activeId === 'details' && !this.issuesLoaded) {
      this._service.search(`repo:${this.repo.full_name}`)
        .subscribe(issues => {
          this.issuesLoaded = true;
          this.issues = issues
            .filter(issue => issue.state === 'open');
        })
    }
  }
}
