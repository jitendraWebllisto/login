import { Injectable, Injector } from '@angular/core';
import{HttpInterceptor} from '@angular/common/http'
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private injector:Injector) { }

  intercept(req,next) {
    let apiService = this.injector.get(ApiService)
    let tokenizatonReq = req.clone({
      setHeaders:{
        Authorization: `JWT ${apiService.getToken()}`
      }
    })
    return next.handle(tokenizatonReq)
  };
  }


