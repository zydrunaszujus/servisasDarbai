import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagrindinisComponent } from './pagrindinis/pagrindinis.component';
import { SarasasComponent } from './sarasas/sarasas.component';
import { ProduktasComponent } from './produktas/produktas.component';

@NgModule({
  declarations: [
    AppComponent,
    PagrindinisComponent,
    SarasasComponent,
    ProduktasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
