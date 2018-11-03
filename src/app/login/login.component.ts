import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  username:Array<string> = ['test1','test2','test3'];
  password:Array<string> = ['password1','password12','password123'];
  constructor(public router : Router) { }

  ngOnInit() {
  }
  
  onSubmit() {
    var flag = false;

    if (this.username.indexOf(this.model.uname) > -1) {
      let usnameIndex =this.username.indexOf(this.model.uname);
      if (this.password[usnameIndex] == this.model.password) {
        flag = true;
      }
    }
    
    if(flag){     
      this.router.navigateByUrl('/parent');
    }
    else
      alert('Invalid User');
  }
}
