import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }
  async getProducts():Promise<ProduktoModelis[]>{
    return await fetch('https://fakestoreapi.com/products').then(r => r.json());
    
  

  }
}


export interface ProduktoModelis{
  title:string,
  price:number,
  description:string,
  image:string
}