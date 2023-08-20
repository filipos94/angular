import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserLoginComponent} from "./user-login/user-login.component";
import {UserRegComponent} from "./user-reg/user-reg.component";


const routes: Routes = [
  {
    component:UserLoginComponent,
    path:'user-login'
  },
  {
    component:UserRegComponent,
    path:'user-register'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
