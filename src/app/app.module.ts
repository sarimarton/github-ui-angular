import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TypeaheadComponent } from './typeahead/typeahead.component';
import { RepoDetailsComponent } from './repo-details/repo-details.component';
import { RepoIssuesComponent } from './repo-issues/repo-issues.component';

const appRoutes: Routes = [
  { path: '',
    redirectTo: '/repos',
    pathMatch: 'full' },
  { path: 'repos',
    component: AppComponent },
  // Unfinished...
];

@NgModule({
  declarations: [
    AppComponent,
    TypeaheadComponent,
    RepoDetailsComponent,
    RepoIssuesComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
