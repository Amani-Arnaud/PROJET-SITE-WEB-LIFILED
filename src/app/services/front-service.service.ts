import { Injectable } from '@angular/core';
import * as API_LINKS from '../shared/app-links';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FrontServiceService {

  constructor(
    private http: HttpClient,
  ) { }

  sendMessage(data:any){
    try {
      this.http.post<any>(API_LINKS.MESSAGE_URL, data).subscribe((result) => {});
      return true;
    } catch (error) {
      return false;
    }
  }
}
