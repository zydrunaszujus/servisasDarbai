import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-sarasas',
  templateUrl: './sarasas.component.html',
  styleUrls: ['./sarasas.component.css']
})
export class SarasasComponent implements OnInit {

  constructor(private apiServisas:ApiService) { }



  ngOnInit(): void {
    
  }
produktai=this.apiServisas.getProducts();
}
