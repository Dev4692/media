import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginDetails: any = {};
  userLogin: any = {};
  usersDB = []

  constructor(private router: Router,
    private userService: UserService) { }

  ngOnInit(): void {
    this.usersDB = JSON.parse(localStorage.getItem("usersDB"));
  }

  login(loginDetails){
    if(!(typeof loginDetails.emailId === 'undefined') && loginDetails.emailId != null && loginDetails.emailId != '' && 
    !(typeof loginDetails.password === 'undefined') && loginDetails.password != null && loginDetails.password != ''){
      var index =this.usersDB.findIndex(x=>x.userid==loginDetails.emailId);
      if(index>-1){
      if(this.usersDB[index].password==loginDetails.password){
        sessionStorage.setItem('loggedInUser', JSON.stringify(this.usersDB[index]));
        this.userService.UserlogIn.next(true);
        this.router.navigate(['/subscribe',{title: 'Login User'}]); 
      }
      else{
        alert('Password is Incorrect');
      }
      
      }
      else {
        alert('Email Id is Incorrect');
      }
  }
  else {
    alert('Please entered required Field');
  }
  
}

}
