import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { ThirdComponent } from './third/third.component';
import { SecondComponent } from './second/second.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // http://localhost:4200
    { path: 'first', component: FirstComponent }, // http://localhost:4200/first
    { path: 'second', component: SecondComponent }, // http://localhost:4200/second
    { path: 'third', component: ThirdComponent }, // http://localhost:4200/third
    { path: 'product/:id', component: ProductComponent } // http://localhost:4200/product/1
];
