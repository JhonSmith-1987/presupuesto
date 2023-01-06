import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import Swal from "sweetalert2";
import {ResponseDtoUserUnit, ResponseUser, UserPost} from "../../../Dto/DtoUser";
import {ApiUserService} from "../../SERVICES/API/api-user.service";
import {Router} from "@angular/router";
import {timer} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  session:string | null = "";

  @Output()
  checkin = new EventEmitter<string>()

  constructor(
    private apiService:ApiUserService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.session = sessionStorage.getItem("session");
    if (this.session == "ok"){
      this.router.navigate(["home"]);
    }
  }

  showCheckin(checkin:string) {
    this.checkin.emit(checkin)
  }

  sweetAlert(message:string){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: message,
      showConfirmButton: false,
      timer: 1500
    })
  }

  sweetAlertError(message:string) {
    Swal.fire({
      icon: 'error',
      title: 'Verifica!...',
      text: message,
      showConfirmButton: false,
      timer: 1500
    })
  }

  handleLogin(form_login: any) {
    if (form_login.value.user == '') {
      this.sweetAlert('Falta tu usuario');
      return;
    }
    if (form_login.value.password == '') {
      this.sweetAlert('Falta tu contraseña');
      return
    }
    let user_post:UserPost = {
      "User": form_login.value.user,
      "Password": form_login.value.password
    }
    this.apiService.postLoginUser(user_post).then((response)=>{
      let res:ResponseUser = response as ResponseUser;
      if (res.message != 'Bienvenido!...'){
        this.sweetAlertError(res.message);
        return;
      }
      this.sweetAlert(res.message);
      sessionStorage.setItem("user_logged", res.response.name);
      sessionStorage.setItem("session", "ok");
      this.router.navigate(["home"]);
    })
  }

}
