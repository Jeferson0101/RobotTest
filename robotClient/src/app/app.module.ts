import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';

import { ApiService } from '../services/robotApi/api.service'
=======

>>>>>>> de5d5b2660421544f772af2301b507d489fc89d7
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
<<<<<<< HEAD
    BrowserModule,
    HttpClientModule
  ],
  providers: [ApiService],
=======
    BrowserModule
  ],
  providers: [],
>>>>>>> de5d5b2660421544f772af2301b507d489fc89d7
  bootstrap: [AppComponent]
})
export class AppModule { }
