import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  userDetails: any;
  userName: string='';
  usersDB = [
    {userid: "abc@media.com", password: "abc123", username: "Tom"},
    {userid: "def@media.com", password: "def123", username: "Dick"}
  ]
  logIn: boolean = false
  constructor(public router: Router,
    public userService: UserService) { 
      localStorage.setItem('usersDB', JSON.stringify(this.usersDB))
    }

  ngOnInit(): void {
   this.userService.UserlogIn.subscribe(res=>{
     this.logIn = res;
     this.userDetails = JSON.parse(sessionStorage.getItem("loggedInUser"));
     if(!(typeof this.userDetails === 'undefined') && this.userDetails != null && this.userDetails != ''){
      this.userName = this.userDetails.username;
    }
   })
  }

  loginClick(){

    this.router.navigate(['/login']);
  }

  logoutClick() {
    this.logIn = false
    this.userService.loggedOut();
    this.router.navigate(['/home']);
  }
  galleryClick(){
    if(this.logIn == false){
      this.router.navigate(['/login']);
    } else{
      this.router.navigate(['/subscribe',{title: 'Login User'}]);
    }
  }
}
