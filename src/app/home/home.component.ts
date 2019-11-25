import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private router:Router) { }
  onDestory(){
               localStorage.clear();
              }

  ngOnInit() {
    console.log(localStorage.length)
    if(localStorage.length == 0){
          this.router.navigate(['/']);
    }
  }

}
