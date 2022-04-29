import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { Error404Compoment } from './core/component/error-404/error-404.component';
import { CoreModule } from './core/core.module';
import { CourseModule } from './courses/course.module';


@NgModule({
  declarations: [
    AppComponent,
    Error404Compoment,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CourseModule,
    CoreModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      },      
      {
        path:'**', component: Error404Compoment
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
