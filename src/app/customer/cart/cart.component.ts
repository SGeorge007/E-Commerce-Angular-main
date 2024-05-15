import { Component, OnInit } from '@angular/core';
import { Cart, PriceSummary } from '../../models/dataTypes';
import { Router } from '@angular/router';
import { ShopService } from '../../services/shop.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{

  public cart: Cart[] | undefined

  public priceSummary: PriceSummary = {
    price: 0,
    discount: 0,
    tax: 0,
    delivery: 0,
    total: 0
  }

  constructor(private router: Router, private shopService: ShopService){}

  ngOnInit(): void {
    this.loadCardDetails()
  }

  loadCardDetails(){
    // this.shopService.getCart().subscribe((res)=>{
    //   this.cart = res.cart.products
    //   // console.log(this.cart);
    //   let price = 0
    //   res.cart.products.forEach((item: any)=>{
    //     if(item.quantity && item.price){
    //       price+= +item.price * +item.quantity 
    //     }
    //   })
    //   this.priceSummary.price = price
    //   this.priceSummary.tax = price/10
    //   this.priceSummary.delivery = 100
    //   this.priceSummary.total = price + price/10 + 100
    //   // console.log(this.priceSummary.total);
    //   if(!this.cart?.length){
    //     this.router.navigate(['/'])
    //   }else{
    //     this.shopService.getCartCount()
    //   }
    // })
    //this.shopService.getCart().subscribe((res)=>{
      this.cart = [{
        productId: "65f6b1da42524e236089d1af", 
        _id: "123", 
        title: "Arduino Uno", 
        price: 45, 
        color: "Blue", 
        categories: "Electronics", 
        desc: "RoboCraze UNO R3 SMD Board Compatible With Arduino | Development Board With USB Cable", 
        image: "", 
        size: "", 
        quantity: 1 , 
        //cart: "",
        cartCount: 1
      }];

      //this.cart = res.cart.products
      // console.log(this.cart);
      let price = 0
      this.cart.forEach((item: any)=>{
        if(item.quantity && item.price){
          price+= +item.price * +item.quantity 
        }
      })
      this.priceSummary.price = price
      this.priceSummary.tax = price/10
      this.priceSummary.delivery = 0
      this.priceSummary.total = 50;//price + price/10 + 100
      // console.log(this.priceSummary.total);
      if(!this.cart?.length){
        this.router.navigate(['/'])
      }else{
        this.shopService.getCartCount()
      }
    //})
  }

  removeFromCart(productId: string){
    this.shopService.removeItemFromCart(productId).subscribe((res)=>{
      this.loadCardDetails() 
    })
    
  }

  checkoutOrder(){
    this.router.navigate(['/checkout'])
  }

  openPopup() {
    // Replace 'https://example.com' with the external URL you want to open
    const externalUrl = 'https://storelocatorgoogle.z13.web.core.windows.net/';
    // Specify the width and height of the popup window
    const width = 600;
    const height = 400;
    // Calculate the position of the popup window to center it on the screen
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;
    // Open the popup window
    window.open(externalUrl, '_blank', `width=${width},height=${height},left=${left},top=${top}`);
  }
}
