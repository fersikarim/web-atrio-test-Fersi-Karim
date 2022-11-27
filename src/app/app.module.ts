import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { ProgressBarWrapperComponent } from './components/progress-bar-wrapper/progress-bar-wrapper.component';
import { CandidateComponent } from './components/candidate/candidate.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
    ProgressBarWrapperComponent,
    CandidateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
