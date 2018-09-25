import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  repo = null;
  title = 'Searchrep';

  onSelect(repo) {
    this.repo = repo;
  }
}
