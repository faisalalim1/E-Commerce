import { Component } from '@angular/core';
import { login, SignUp } from '../data-type';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent {

  showLogin:boolean = true;
  constructor(private user:UserService) {}

  ngOnInit():void{
    this.user.userAuthReload();
  }

  signUp(data:SignUp)
  {
    // console.log(data);
    this.user.userSignUp(data);
    
  }

  login(data:login)
  {
    console.log(data);
    this.user.userLogin(data);
    
  }

  openLogin(){
    this.showLogin = true;
  }

  openSignup()
  {
    this.showLogin = false
  }

}
