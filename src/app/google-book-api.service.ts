import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class GoogleBookApiService {
  public searchedBooks: any[] = [];
  public products: any;
  public cart: any[] = [];
  public bookTypes:any;

  constructor(private http: Http) {
    this.getBookTypes();
   }


  SearchBooks(search) {
    const encodedURI  = encodeURI("https://www.googleapis.com/books/v1/volumes?q="+ search +"&maxResults=12")
    return this.http.get(encodedURI)
        .map((response: Response) => response.json());
  }

  SearchByISBN(isbn){
  var encodedURI = encodeURI("https://www.googleapis.com/books/v1/volumes?q=isbn:" + isbn +"&maxResults=1");
  return this.http.get(encodedURI)
      .map((response: Response) => response.json());
}
addToCart(book) {
  this.cart.push(book);
  console.log(this.cart);
}
getBookTypes(){
  this.http.get('https://cors-anywhere.herokuapp.com/http://72.249.48.96/~dmppeytr/api/types?_format=json').subscribe(res=>{
  this.bookTypes=res;
  console.log('Got Book Types=',res);
  });
}
}
