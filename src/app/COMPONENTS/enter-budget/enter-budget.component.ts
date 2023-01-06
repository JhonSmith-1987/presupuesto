import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import Swal from "sweetalert2";
import {ApiUserService} from "../../SERVICES/API/api-user.service";
import {DtoBudget} from "../../../Dto/DtoBudget";
import {ResponseDtoUserUnit} from "../../../Dto/DtoUser";

@Component({
  selector: 'app-enter-budget',
  templateUrl: './enter-budget.component.html',
  styleUrls: ['./enter-budget.component.scss']
})
export class EnterBudgetComponent implements OnInit {

  @Output()
  spent = new EventEmitter<string>()

  constructor(
    private apiService:ApiUserService
  ) { }

  ngOnInit(): void {
  }

  showSpent(spent:string){
    this.spent.emit(spent);
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


  handleBudget(budget: any) {
    console.log(budget.value);
    if (budget.value.enter_budget <= 0){
      this.sweetAlertError("La cantidad debe ser mayor y diferente de cero");
      return;
    }
    let budget_post:DtoBudget = {
      "Detail": budget.value.detail,
      "Budget": budget.value.enter_budget
    }
    this.apiService.postBudget(budget_post).then((response)=>{
      let res:ResponseDtoUserUnit = response as ResponseDtoUserUnit;
      this.sweetAlert(res.Messages);
      this.showSpent("spent");
    })
  }
}
