import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms'

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  checkoutform = new FormGroup({
    name : new FormControl(""),
    address : new FormControl(""),
    city : new FormControl(""),
    state : new FormControl(""),
    zip : new FormControl(""),
    // cardNumber : new FormControl(""),
    // expiryDate : new FormControl(""),
    // cvv : new FormControl(""),

  })

  checkoutForms()
  {
    console.log(this.checkoutform.value);
    
  }
}
