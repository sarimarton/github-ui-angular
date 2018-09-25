import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TypeaheadComponent } from './typeahead/typeahead.component';
import { RepoDetailsComponent } from './repo-details/repo-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TypeaheadComponent,
    RepoDetailsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
