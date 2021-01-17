import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { OverviewComponent } from './overview/overview.component';
import { QuizComponent } from './quiz/quiz.component';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';
import { IonicRatingModule } from 'ionic-rating';

 const routes : Routes = [
  {  path: '', 
     component: QuizComponent
  
 },
 {
   path : 'overview',
   component : OverviewComponent
   
 }
 ];

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    OverviewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,   
    RouterModule.forRoot(routes) 
  ],
  
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
