import { Component } from '@angular/core';
import { cart, login, product, SignUp } from '../data-type';
import { ProductService } from '../services/product.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent {

  showLogin:boolean = true;
  authError:string = "";
  
  constructor(private user:UserService, private product:ProductService) {}

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
    this.user.invalidUserAuth.subscribe((result)=>{
      console.log("apple",result);
      if(result){
        this.authError= "Please enter valid User details"
      }else{
        this.localCartToRemoteCart();
      }
      
    })
    
  }

  openLogin(){
    this.showLogin = true;
  }

  openSignup()
  {
    this.showLogin = false
  }


  localCartToRemoteCart(){
    let data = localStorage.getItem('localCart');
    let user = localStorage.getItem('user');
    let userId= user && JSON.parse(user).id;
    if(data){
     let cartDataList:product[]= JSON.parse(data);
   
     cartDataList.forEach((product:product, index)=>{
       let cartData:cart={
         ...product,
         productId: product.id,
         userId,
         URL: ''
       }
       delete cartData.id;
       setTimeout(() => {
         this.product.addToCart(cartData).subscribe((result: any)=>{
           if(result){
             console.warn("data is stored in DB");
           }
         })
       }, 500);
       if(cartDataList.length===index+1){
         localStorage.removeItem('localCart')
       }
     })
    }

    setTimeout(()=>{
      this.product.getCartList(userId);
    },2000);
  }  




}
