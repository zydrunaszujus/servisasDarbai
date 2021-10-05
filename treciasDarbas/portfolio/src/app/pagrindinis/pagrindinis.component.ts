import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagrindinis',
  templateUrl: './pagrindinis.component.html',
  styleUrls: ['./pagrindinis.component.css']
})
export class PagrindinisComponent implements OnInit {

  constructor (private kiausiniuServisas:KiausiniaiService){}

  ngOnInit(): void {
  }
Taskai=this.kiausiniuServisas.GetPoints();
}
