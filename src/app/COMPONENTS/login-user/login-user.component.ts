import {Component, OnInit, Output} from '@angular/core';
import {ApiUserService} from "../../SERVICES/API/api-user.service";

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})
export class LoginUserComponent implements OnInit {
  checkin: boolean = false;
  login: boolean = true;

  constructor(
    private apiUser:ApiUserService
  ) { }

  ngOnInit(): void {
    this.apiUser.getUser().then((response)=>{
    })
  }

  showCheckin(event: string) {
    if (event == 'checkin'){
      this.checkin = true;
      this.login = false;
    }
  }

  showLogin(event: string) {
    if (event == 'login') {
      this.login = true;
      this.checkin = false;
    }
  }
}
