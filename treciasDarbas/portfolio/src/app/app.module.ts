import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{RouterModule} from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeniuComponent } from './meniu/meniu.component';

import { Puslapis1Component } from './pages/puslapis1/puslapis1.component';
import { Puslapis2Component } from './pages/puslapis2/puslapis2.component';
import { Puslapis3Component } from './pages/puslapis3/puslapis3.component';
import { PagrindinisComponent } from './pagrindinis/pagrindinis.component';

@NgModule({
  declarations: [
    AppComponent,
    MeniuComponent,
    Puslapis1Component,
    Puslapis2Component,
    Puslapis3Component,
    PagrindinisComponent
  ],
  imports: [
    BrowserModule,
   RouterModule.forRoot([
     {path:'',component:PagrindinisComponent},
     {path:'puslapis1',component:Puslapis1Component},
     {path:'puslapis2',component:Puslapis1Component},
     {path:'puslapis3',component:Puslapis1Component}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
