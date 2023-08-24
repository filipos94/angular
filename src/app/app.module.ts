import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserRegComponent} from './user-reg/user-reg.component';
import {UserLoginComponent} from './user-login/user-login.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ButtonModule} from "primeng/button";
import {HeaderComponent} from './header/header.component';
import {InputTextModule} from 'primeng/inputtext';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    UserRegComponent,
    UserLoginComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputTextModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
