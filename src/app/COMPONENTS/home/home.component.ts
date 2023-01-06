import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  session_data:string | null = '';
  name_session:string | null = '';
  budget: boolean = true;
  spent: boolean = false;

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
    this.name_session = sessionStorage.getItem("user_logged");
    this.session_data = sessionStorage.getItem("session");
    if (this.session_data == null){
      this.router.navigate(["login"]);
    }
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(["login"]);
  }

  showSpent(event: string) {
    this.spent = true;
    this.budget = false;
  }

  showBudget(event: string) {
    this.budget = true;
    this.spent = false;
  }
}
