import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
​
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  loginUrl = ' https://testwallet.angelium.net/api/jwt/api-token-auth/';
  userDetailUrl='https://testwallet.angelium.net/api/exchange/trades/';
 token:"";
  constructor(private http: HttpClient) { }
private getHeader():any{
  const httpOptions = {
    headers: new HttpHeaders ({
      'Authorization': "JWT "+this.token
​
    })
  };
  return httpOptions;
}
​
​
  getConfig(data) {
    return this.http.post<any>(this.loginUrl, data); 
  }
  getUserDetail(){
    const httpBody = new HttpParams()
    .set('pair','anx/btc')
    .set('timestamp','1573212003579');
    return this.http.post<any>(this.userDetailUrl,httpBody,this.getHeader()).subscribe(
      data =>{
        console.log("user detail data" + data)
      }
    );
  }
}
​
export interface Config {
  token: string;
​
}
