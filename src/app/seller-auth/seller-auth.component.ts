import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { SignUp } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {
  showLogin = false;
  authError:string = '';


  constructor( private seller:SellerService, private router:Router){}

  


  ngOnIt():void{
    this.seller.reloadSeller();
  }

  signUp(data:SignUp):void
  {
    console.log(data);
    this.seller.userSignUp(data)
    
  }

  login(data:SignUp):void
  {
    this.authError = "";
    // console.log(data);
    this.seller.userLogin(data);
    this.seller.isLoginError.subscribe((isError)=>{
      if(isError){
        this.authError="Email or password is not correct";
      }
    })
    
    
  }

  // Toggle between signup and login

  openLogin()
  {
    this.showLogin = true;
  }

  openSignUp()
  {
    this.showLogin= false;
  }


}
