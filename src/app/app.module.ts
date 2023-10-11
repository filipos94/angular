import {NgModule, isDevMode} from '@angular/core';
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
import {CookieService} from 'ngx-cookie-service';
import {LogoutComponent} from './logout/logout.component';
import {AppService} from "./app.service";
import {StoreModule} from '@ngrx/store';
import {ChatroomModule} from "./chatroom/chatroom.module";
import {chatroomReducer} from "./chatroom/state-chatroom/chatroom-page.reducer";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {ChatroomService} from "./chatroom/chatroom.service";
import {headerReducer} from "./header/state-header/header-page.reducer";
import {HeaderModule} from "./header/header.module";
import {HomeComponent} from "./home/home.component";
import {Subscription} from "rxjs";

@NgModule({
  declarations: [
    AppComponent,
    UserRegComponent,
    UserLoginComponent,
    HeaderComponent,
    ChatroomComponent,
    LogoutComponent,
    HomeComponent
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
    StoreModule.forRoot({
      chatroom: chatroomReducer,
      header: headerReducer,
    }),
    ChatroomModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    HeaderModule,
  ],
  providers: [CookieService, AppService, ChatroomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
