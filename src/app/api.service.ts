import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  loginUrl = ' https://testwallet.angelium.net/api/jwt/api-token-auth/';

  constructor(private http: HttpClient) { }

  getConfig() {
    return this.http.post(this.loginUrl,
      { email: "deejay.chat@angelium.net",
       password: "Test@123" },
       
       );
  }
}

export interface Config {
  token: string;

}