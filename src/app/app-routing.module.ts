import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserLoginComponent} from "./user-login/user-login.component";
import {UserRegComponent} from "./user-reg/user-reg.component";
import {AppComponent} from "./app.component";
import {ChatroomComponent} from "./chatroom/chatroom.component";


const routes: Routes = [
  {
    component:AppComponent,
    path:''
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
