import { Component } from '@angular/core';

import { produktai } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = produktai;
  manoMasyvas = ['Obuolys', 'Kriause', 'Slyva'];
  manoSpalva = "red";


  share() {
    window.alert('The product has been shared!');
  }

  parodyti(){
    window.alert('Informacija atejo is vaikinio komponento');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/