import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {
  title = '';
  constructor( public userService: UserService,
    private route: ActivatedRoute,) { }
  logIn = false;
  showSubscribe = false;
  loggedInUser = []

  ngOnInit(): void {
    let titleText = this.route.snapshot.params['title'];
    if(!(typeof titleText === 'undefined') && titleText != null && titleText != ''){
      this.title = titleText;
      this.logIn = true;
    }
  }

  

}
