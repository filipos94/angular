import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserLoginComponent} from "./user-login/user-login.component";
import {UserRegComponent} from "./user-reg/user-reg.component";
import {AppComponent} from "./app.component";
import {ChatroomComponent} from "./chatroom/chatroom.component";
import {LogoutComponent} from "./logout/logout.component";
import {HomeComponent} from "./home/home.component";


const routes: Routes = [
  {
    component:HomeComponent,
    path:'home'
  },
  {
    component:UserLoginComponent,
    path:'user-login'
  },
  {
    component:UserRegComponent,
    path:'user-register'
  },
  {
    component:ChatroomComponent,
    path:'chatroom'
  },
  {
    component:LogoutComponent,
    path:'logout'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
