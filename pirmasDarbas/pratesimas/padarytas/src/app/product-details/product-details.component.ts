import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Product, produktai} from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product | undefined

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const URLparametrai = this.route.snapshot.paramMap;
    const id = Number(URLparametrai.get('productId'));

    this.product = produktai.find(x => x.id === id)

  }

}
