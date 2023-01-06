import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ApiUserService} from "./SERVICES/API/api-user.service";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { LoginUserComponent } from './COMPONENTS/login-user/login-user.component';
import { CheckinComponent } from './COMPONENTS/checkin/checkin.component';
import { LoginComponent } from './COMPONENTS/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './COMPONENTS/home/home.component';
import { EnterBudgetComponent } from './COMPONENTS/enter-budget/enter-budget.component';
import { SpentsComponent } from './COMPONENTS/spents/spents.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginUserComponent,
    CheckinComponent,
    LoginComponent,
    HomeComponent,
    EnterBudgetComponent,
    SpentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    ApiUserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
