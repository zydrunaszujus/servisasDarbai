import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KiausiniaiService {

  constructor() { }

  FoundEggs:string[]=[];
  Points=0;

  IsAlreadyFound(id:string){
    return this.FoundEggs.includes(id);
  }

  Found(id:string){
this.FoundEggs.push(id);
this.Points++;

  }
GetPoitns(){
  return this.Points;
}
GetFoundEggs(){
return this.FoundEggs;
}

}
