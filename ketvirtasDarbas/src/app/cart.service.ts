import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})


export class CartService {

  constructor(private http:HttpClient) { }

   items : Product[] = [];

   getShippingPrices(){
     return this.http.get<ShippingKaina[]>('/assets/shipping.json');
   }
   addToCart(product: Product){
      this.items.push(product);
   }

   getItems() {
     return this.items;
   }

   clearCart(){
     this.items = [];
     return this.items;
   }



}
export interface ShippingKaina {
  type:string,
  price:number
}