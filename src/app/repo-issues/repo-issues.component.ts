import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-repo-issues',
  templateUrl: './repo-issues.component.html',
  styleUrls: ['./repo-issues.component.css']
})
export class RepoIssuesComponent implements OnInit {
  @Input() repo;
  @Input() issues;
  @Input() issuesLoaded;

  constructor() { }

  ngOnInit() {
  }

}
