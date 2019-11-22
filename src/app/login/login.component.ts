import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ApiService, Config} from '../api.service';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  config: { token: any; };
 

  constructor(private formBuilder: FormBuilder ,private apiservice:ApiService,public http: HttpClient, private router:Router) { }
   
  ngOnInit() {
   this.formInit(); 
  } 
 
  formInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
  })
    
  } 
  get f() { return this.loginForm.controls; }


  onSubmit(){
    console.log(this.loginForm.value); 
    // let formData = new FormData();
    // formData.append('username', this.loginForm.get('name').value);
    // formData.append('password', this.loginForm.get('email').value);
    

    this.http.post<any>('https://testwallet.angelium.net/api/jwt/api-token-auth/', this.loginForm.value)
      .subscribe(res => {
        console.log(res);
      this.router.navigate(["/home"])
      })
        
    // this.apiservice.getConfig()
    // .subscribe((data: Config) => this.config = {
    //     token: data['loginUrl'],
        
    // });
        
  }

 
}
