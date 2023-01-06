import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DtoUser, ResponseDtoUserUnit} from "../../../Dto/DtoUser";
import {ApiUserService} from "../../SERVICES/API/api-user.service";

import Swal from 'sweetalert2'

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.scss']
})
export class CheckinComponent implements OnInit {

  @Output()
  login = new EventEmitter<string>()

  constructor(
    private apiservice:ApiUserService
  ) { }

  ngOnInit(): void {
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

  handleCheckin(form_checkin: any) {
    if (form_checkin.value.name == ''){
      this.sweetAlert("Falta tu nombre");
    }
    if (form_checkin.value.user == ''){
      this.sweetAlert("Falta tu usuario");
    }
    if (form_checkin.value.password == ''){
      this.sweetAlert("Falta tu contraseña");
    }
    let user:DtoUser = {
      "Name": form_checkin.value.name,
      "User": form_checkin.value.user,
      "Password": form_checkin.value.password
    }
    this.apiservice.postUser(user).then((response)=>{
      let response_data:ResponseDtoUserUnit = response as ResponseDtoUserUnit
      this.sweetAlert('usuario creado con éxito');
      let message:string = 'login';
      this.login.emit(message);
    });
  }

  showLogin(login:string) {
    this.login.emit(login);
  }
}
