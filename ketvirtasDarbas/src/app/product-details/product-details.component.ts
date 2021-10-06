import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Product, produktai} from '../products';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product!: Product | undefined

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit(): void {
    const URLparametrai = this.route.snapshot.paramMap;
    const id = Number(URLparametrai.get('productId'));
    this.product = produktai.find(x => x.id === id)
  }

  pridetiPreke(produktas: Product){
    this.cartService.addToCart(produktas);
    alert("Pridejome preke i krepseli");
  }


}
