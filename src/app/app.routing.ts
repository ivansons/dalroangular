import { RouterModule , Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component'; 
import { HomeComponent } from './home/home.component';
import { ResultComponent } from './result/result.component';
import { SearchComponent } from './search/search.component';
import { RegistrationComponent } from './registration/registration.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { FormComponent } from './form/form.component';


const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'search',  component: SearchComponent },
    { path: 'cart',  component: CartComponent },
    { path: 'contact',  component: ContactComponent },
    { path: 'register',  component: RegistrationComponent },
    { path: 'search/:isbn', component: ResultComponent },
    { path: 'apply', component: FormComponent },
    { path: '**', component: NotFoundComponent }
]

export const AppRouting = RouterModule.forRoot(appRoutes);