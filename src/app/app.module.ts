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
import {ChatroomComponent} from './chatroom/chatroom.component';
import {RouterLink} from "@angular/router";
import {RippleModule} from "primeng/ripple";
import {AccordionModule} from "primeng/accordion";
import {RadioButtonModule} from "primeng/radiobutton";
import {PanelModule} from 'primeng/panel';
import {StyleClassModule} from 'primeng/styleclass';
import {TableModule} from "primeng/table";
import {ListboxModule} from "primeng/listbox";
import {CookieService} from 'ngx-cookie-service'

@NgModule({
  declarations: [
    AppComponent,
    UserRegComponent,
    UserLoginComponent,
    HeaderComponent,
    ChatroomComponent
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
    RouterLink,
    RippleModule,
    AccordionModule,
    RadioButtonModule,
    PanelModule,
    StyleClassModule,
    TableModule,
    ListboxModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
