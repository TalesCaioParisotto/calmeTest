import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserRegistationService {

  constructor(private http: HttpClient) { }


  public doRegistration(user: any) {
    return this.http.post("http://localhost:8080/register",user,{responseType:'text' as 'json'});
  }

}
