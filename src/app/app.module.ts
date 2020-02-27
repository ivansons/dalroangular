import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ResultComponent } from './result/result.component';
import { SearchComponent } from './search/search.component';
import { AppRouting } from './app.routing';
import { GoogleBookApiService } from './google-book-api.service';
import { CartComponent } from './cart/cart.component';
import { FormComponent } from './form/form.component';
import { RegistrationComponent } from './registration/registration.component';
import { ContactComponent } from './contact/contact.component';
 
@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,
    ResultComponent,
    SearchComponent,
    CartComponent,
    FormComponent,
    RegistrationComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouting
  ],
  providers: [GoogleBookApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
