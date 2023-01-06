import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {DtoUser, UserPost} from "../../../Dto/DtoUser";
import * as http from "http";
import {DtoBudget} from "../../../Dto/DtoBudget";
import {DtoSpent} from "../../../Dto/DtoSpent";

@Injectable({
  providedIn: 'root'
})
export class ApiUserService {

  url:string = "/api/"

  constructor(
    private http:HttpClient
  ) { }

  async getUser(){
    const headers = new HttpHeaders({
      "Content-Type" : "application/json",
    })
    try {
      let data =await this.http.get(this.url + "users", {headers:headers}).toPromise();
      return data;
    }catch (e) {
      return e;
    }
  }

  async postUser(user:DtoUser) {
    const headers = new HttpHeaders({
      "Content-Type" : "application/json",
    })
    try {
      let data = await this.http.post(this.url + "user", user, {headers:headers}).toPromise();
      return data;
    }catch (e) {
      return e;
    }
  }

  async postLoginUser(user_login:UserPost) {
    const headers = new HttpHeaders({
      "Content-Type" : "application/json",
    })
    try {
      let data = await this.http.post(this.url + "userLogin", user_login, {headers:headers}).toPromise();
      return data;
    }catch (e) {
      return e;
    }
  }

  // budget

  async getBudget(){
    const headers = new HttpHeaders({
      "Content-Type" : "application/json",
    })
    try {
      let data = await this.http.get(this.url + "budget", {headers:headers}).toPromise();
      return data
    }catch (e) {
      return e;
    }
  }

  async postBudget(budget:DtoBudget) {
    const headers = new HttpHeaders({
      "Content-Type" : "application/json",
    })
    try {
      let data = await this.http.post(this.url + "budgets", budget, {headers:headers}).toPromise();
      return data;
    }catch (e) {
      return e;
    }
  }

  // spent

  async getSpent(){
    const headers = new HttpHeaders({
      "Content-Type" : "application/json",
    })
    try {
      let data = await this.http.get(this.url + "spent", {headers:headers}).toPromise();
      return data;
    }catch (e) {
      return e;
    }
  }

  async postSpent(spent:DtoSpent) {
    const headers = new HttpHeaders({
      "Content-Type" : "application/json",
    })
    try {
      let data = await this.http.post(this.url + "spentPost", spent, {headers:headers}).toPromise();
      return data;
    }catch (e) {
      return e;
    }
  }

}
