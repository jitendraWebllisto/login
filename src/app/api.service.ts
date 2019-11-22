import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators, EmailValidator } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  loginUrl = ' https://testwallet.angelium.net/api/jwt/api-token-auth/';
  loginForm:FormGroup;
  loginData="";

  constructor(private http: HttpClient) { }

  getConfig(data) {
    if((data)) {
      console.log('------API---',data['value']);
      this.loginData = data['value'];
    }
    return this.http.post<any>(this.loginUrl, this.loginData); 
  }
}

export interface Config {
  token: string;

}