import { Component, OnInit, ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR } from '@angular/core';
import { KiausiniaiService } from 'src/app/kiausiniai.service';

@Component({
  selector: 'app-puslapis1',
  templateUrl: './puslapis1.component.html',
  styleUrls: ['./puslapis1.component.css']
})
export class Puslapis1Component implements OnInit {

  constructor(private kiausiniaiService:KiausiniaiService) { }

  ngOnInit(): void {
  }

url="https://www.eurohorecana.lt/kiausiniai-am-30";

paslepti=this.kiausiniaiService.IsAlreadyFound(this.url);

kiausinisRastas(){
  this.kiausiniaiService.Found(this.url);
  alert("Radau kiausini")
  this.paslepti=true;
}
}
