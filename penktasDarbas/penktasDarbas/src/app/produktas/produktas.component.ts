import { Component, Input, OnInit } from '@angular/core';
import { ProduktoModelis } from '../api.service';
@Component({
  selector: 'app-produktas',
  templateUrl: './produktas.component.html',
  styleUrls: ['./produktas.component.css']
})
export class ProduktasComponent implements OnInit {

  constructor() { }

 @Input() objektas!: ProduktoModelis;

    
  
ngOnInit():void{

}
}

