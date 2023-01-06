import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginUserComponent} from "./COMPONENTS/login-user/login-user.component";
import {HomeComponent} from "./COMPONENTS/home/home.component";

const routes: Routes = [
  { path:"login", component:LoginUserComponent },
  { path:"home", component:HomeComponent },
  { path:"", redirectTo:"login", pathMatch:"full" },
  { path:"**", redirectTo:"login", pathMatch:"full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
