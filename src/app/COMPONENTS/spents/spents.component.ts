import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ApiUserService} from "../../SERVICES/API/api-user.service";
import {ResponseBudget} from "../../../Dto/DtoBudget";
import {count} from "rxjs";
import Swal from "sweetalert2";
import {DtoSpent, ResponseSpent} from "../../../Dto/DtoSpent";
import {ResponseDtoUserUnit, ResTotal} from "../../../Dto/DtoUser";
import {ChangeDetection} from "@angular/cli/lib/config/workspace-schema";

@Component({
  selector: 'app-spents',
  templateUrl: './spents.component.html',
  styleUrls: ['./spents.component.scss']
})
export class SpentsComponent implements OnInit {

  res_budget: ResponseBudget[] = [];
  suma_budget: any;
  res_spent: ResponseSpent[] = [];
  suma_spent: any;
  diferencia: any;

  @Output()
  budget = new EventEmitter<string>();

  constructor(
    private apiService:ApiUserService,
  ) { }

  ngOnInit(): void {
    this.apiService.getSpent().then((response)=>{
      console.log(response);
      let resp:ResTotal = response as ResTotal;
      this.res_budget = resp.resBudget;
      this.res_spent = resp.resSpent;
      this.suma_budget = resp.sumBudget;
      this.suma_spent = resp.sumSpent;
      this.diferencia = resp.diferencia;
    })
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

  showBudget(budget:string){
    this.budget.emit(budget);
  }

  handleSpent(spent: any) {
    if (spent.value.detail == '') {
      this.sweetAlertError("Falta agregar el detalle...");
    }
    if (spent.value.spent <= 0) {
      this.sweetAlertError("El valor debe ser mayor y diferente de cero...");
    }
    let spent_post:DtoSpent = {
      "Detail": spent.value.detail,
      "Spent": spent.value.spent_value
    }
    this.apiService.postSpent(spent_post).then((response)=>{
      let res:ResTotal = response as ResTotal;
      this.res_budget = res.resBudget;
      this.res_spent = res.resSpent;
      this.suma_budget = res.sumBudget;
      this.suma_spent = res.sumSpent;
      this.diferencia = res.diferencia;
      this.sweetAlert(res.message);
      spent.reset();
    })
  }
}
