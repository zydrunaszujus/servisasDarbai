import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagrindinisComponent } from './pagrindinis/pagrindinis.component';

import { SarasasComponent } from './sarasas/sarasas.component';

const routes: Routes = [
  {path:'',component:PagrindinisComponent},
  {path:'sarasas',component:SarasasComponent},
  {path:'**',component:RouterModule},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
