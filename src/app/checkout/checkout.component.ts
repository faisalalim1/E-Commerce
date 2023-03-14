import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms'

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent  {


  paymentRequest:google.payments.api.PaymentDataRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['MASTERCARD', 'VISA',"AMEX"]
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleGatewayMerchantId'
          }
        }
      }
    ],
    merchantInfo: {
      merchantId: '12345678901234567890',
      merchantName: 'Example Merchant'
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: '123.45',
      currencyCode: 'INR',
      countryCode: 'IN'
    },
    callbackIntents:['PAYMENT_AUTHORIZATION']
  };

 onLoadPaymentData = (
  event:Event
 ):void => {
  const eventDetails = event as CustomEvent<google.payments.api.PaymentData>;
  console.log('load payment data', eventDetails.detail);
  

 }

 onPaymentDataAuthorized: google.payments.api.PaymentAuthorizedHandler = (
  paymentData
 ) => {
  console.log('payment authorized', paymentData);
  return{
    transactionState: 'SUCCESS'
  }
  
 }

 onError = (event: ErrorEvent):void => {
  console.log('error', event.error);
  
 }
  



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
