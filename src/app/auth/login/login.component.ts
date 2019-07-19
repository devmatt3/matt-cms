import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../user.model';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  public login(){
    this.authService.login(new User("", ""));
  }

}
