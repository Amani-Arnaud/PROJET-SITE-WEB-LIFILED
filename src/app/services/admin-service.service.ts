import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import * as API_LINKS from '../shared/app-links';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(
    private http: HttpClient
  ) { }

  isAuth() {
    let logined = localStorage.getItem("adminIsLogin");
    if (logined != null && logined == "admin_login") {
      return true;
    } else {
      return false;
    }
  }

  login(){
    return this.http.get<any>(API_LINKS.ADMIN_URL).pipe(map((res)=>{
      return res;
    }));
  }

  logout() {
    try {
      localStorage.removeItem('adminIsLogin');
      return true;
    } catch (error) {
      return false;
    }
  }

  getMessages(){
    return this.http.get<any>(API_LINKS.MESSAGE_URL + "?_sort=id&_order=desc").pipe(map((res)=>{
      return res;
    }));
  }

  addToWhishList(id: number, data: any){
    try {
      this.http.patch<any>(API_LINKS.MESSAGE_URL + '/' + id, data).subscribe((res)=>{});
      return true;
    } catch (error) {
      return false;
    }
  }
  readMessage(id: Number, data: any){
    try {
      this.http.patch<any>(API_LINKS.MESSAGE_URL + '/' + id, data).subscribe((res)=>{});
      return true;
    } catch (error) {
      return false;
    }
  }

  searchMessage(attribut: string, value: string){
    return this.http.get<any>(API_LINKS.MESSAGE_URL + '?' + attribut + '=' + value + "&_sort=id&_order=desc").pipe(map((res)=>{
      return res;
    }));
  }
}
