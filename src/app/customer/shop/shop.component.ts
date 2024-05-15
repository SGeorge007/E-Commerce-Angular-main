import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/dataTypes';
import { ShopService } from '../../services/shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent implements OnInit{

  public shopProducts: Product[] | undefined

  constructor(private shopService: ShopService){}

  ngOnInit(): void {
this.shopProducts = [{
  "_id": "65f6b4e242524e236089d279",
  "title": "Garud Hoodie",
  "price": 40,
  "categories": "Clothes",
  "color": "White",
  "image": "https://www.aeroarmour.store/cdn/shop/files/BigSizeHoodie14.jpg?v=1701785667&width=1800",
  "desc": "White printed sweatshirt has a hooded, 1 kangaroo pocket, long sleeves, ribbed hem",
  "size": "M",
  "productId": "65f6b4e242524e236089d279"
},
{
  "_id": "65f6b4e242524e236089d279",
  "title": "Garud Hoodie",
  "price": 50,
  "categories": "Formal Shoe",
  "color": "White",
  "image": "https://images.pexels.com/photos/292999/pexels-photo-292999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "desc": "White printed sweatshirt has a hooded, 1 kangaroo pocket, long sleeves, ribbed hem",
  "size": "M",
  "productId": "65f6b4e242524e236089d279"
},
{
  "_id": "65f6b4e242524e236089d279",
  "title": "Printed T-Shirt",
  "price": 60,
  "categories": "Clothes",
  "color": "White",
  "image": "https://images.pexels.com/photos/1306246/pexels-photo-1306246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "desc": "White printed sweatshirt has a hooded, 1 kangaroo pocket, long sleeves, ribbed hem",
  "size": "M",
  "productId": "65f6b4e242524e236089d279"
},
{
  "_id": "65f6b4e242524e236089d279",
  "title": "Workout Hoodie",
  "price": 70,
  "categories": "Clothes",
  "color": "White",
  "image": "https://images.pexels.com/photos/1040424/pexels-photo-1040424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "desc": "White printed sweatshirt has a hooded, 1 kangaroo pocket, long sleeves, ribbed hem",
  "size": "M",
  "productId": "65f6b4e242524e236089d279"
},
{
  "_id": "65f6b4e242524e236089d279",
  "title": "winter Jacket",
  "price": 45,
  "categories": "Clothes",
  "color": "White",
  "image": "https://images.pexels.com/photos/54203/pexels-photo-54203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "desc": "White printed sweatshirt has a hooded, 1 kangaroo pocket, long sleeves, ribbed hem",
  "size": "M",
  "productId": "65f6b4e242524e236089d279"
},
{
  "_id": "65f6b4e242524e236089d279",
  "title": "Garud Hoodie",
  "price": 55,
  "categories": "Clothes",
  "color": "White",
  "image": "https://www.aeroarmour.store/cdn/shop/files/BigSizeHoodie14.jpg?v=1701785667&width=1800",
  "desc": "White printed sweatshirt has a hooded, 1 kangaroo pocket, long sleeves, ribbed hem",
  "size": "M",
  "productId": "65f6b4e242524e236089d279"
},
{
  "_id": "65f6b4e242524e236089d279",
  "title": "Denim Jacket",
  "price": 65,
  "categories": "Clothes",
  "color": "White",
  "image": "https://images.pexels.com/photos/1578997/pexels-photo-1578997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "desc": "White printed sweatshirt has a hooded, 1 kangaroo pocket, long sleeves, ribbed hem",
  "size": "M",
  "productId": "65f6b4e242524e236089d279"
}];

    // this.shopService.trendyProducts().subscribe((res)=>{
    //   if(res && res.length){
    //     this.shopProducts = res
    //   }
      
    // })
    let user = localStorage.getItem('customer')
    if (user){
      this.shopService.getCartCount()
    }
  } 
}
