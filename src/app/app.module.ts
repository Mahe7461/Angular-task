import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CommentComponent } from './comment/comment.component';
import { LoginfromsComponent } from './loginfroms/loginfroms.component';
import { ReactiveFormsModule} from '@angular/forms';
import { DataComponent } from './data/data.component';
import { LinkComponent } from './link/link.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CommentComponent,
    LoginfromsComponent,
    DataComponent,
    LinkComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
