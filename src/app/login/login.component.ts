import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, EmailValidator } from '@angular/forms';
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
  public config: Array<any> 
  submitted = false;
  myData = ''
  errorMessage = ""
  errorDiv:boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private apiservice:ApiService,
    public http: HttpClient,
    private router:Router
  ){
    this.apiservice.getConfig(this.loginForm);
  }
   
  ngOnInit() {
   this.formInit(); 
  } 
 
  formInit() {
    this.loginForm = this.formBuilder.group({
      email:    ['', Validators.required],
      password: ['', Validators.required]
  })
    
  } 
  get f() { return this.loginForm.controls; }


  onSubmit(){
    this.submitted = true;
    this.myData = this.loginForm.value;
    this.apiservice.getConfig(this.loginForm).subscribe(res => {
      // console.log(res);
      if(res){
        this.router.navigate(['/home']);
      }
      error=>{
        // console.log(error);
        this.errorDiv = true;
        this.errorMessage = error.error;
      }
      
    })

  }
 
}
