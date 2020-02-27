import { Component, OnInit } from '@angular/core';
import { Papa } from 'ngx-papaparse';
import { GoogleBookApiService } from 'app/google-book-api.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public temp: any[] = [];

  constructor(public bookApi: GoogleBookApiService) { }

  ngOnInit() {
    for (let i = 0; i < this.bookApi.cart.length; i++) {
      const raw = {
        ItemNo: i,
        ISBN_ISSN: this.bookApi.cart[i]['material_info'].industryIdentifiers[0].identifier,
        Title: this.bookApi.cart[i]['material_info'].title,
        Publisher: this.bookApi.cart[i]['material_info'].publisher,
        Author1: this.bookApi.cart[i]['material_info'][0] ? this.bookApi.cart[i]['bookDetail'][0] : "-",
        Author2: this.bookApi.cart[i]['material_info'][1] ? this.bookApi.cart[i]['bookDetail'][1] : "-",
        Author3: this.bookApi.cart[i]['material_info'][2] ? this.bookApi.cart[i]['bookDetail'][2] : "-",
        Author4: this.bookApi.cart[i]['material_info'][3] ? this.bookApi.cart[i]['bookDetail'][3] : "-",
        Pages: this.bookApi.cart[i]['material_info'].pageCount,

      }
      this.temp.push(raw);
    }
  }

}
