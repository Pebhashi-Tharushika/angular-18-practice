import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { ThirdComponent } from './third/third.component';
import { SecondComponent } from './second/second.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuardService } from './services/guards/auth.guard.service';
import { DeactivateGuardService } from './services/guards/deactivate-guard.service';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // http://localhost:4200

    { path: 'first', component: FirstComponent, canDeactivate: [DeactivateGuardService] }, // http://localhost:4200/first

    {
        path: 'second',
        canActivate: [AuthGuardService],
        component: SecondComponent
    }, // http://localhost:4200/second

    { path: 'third', component: ThirdComponent, data: { name: "Kamal", age: 30 } }, // http://localhost:4200/third

    {
        path: 'product',
        component: ProductsComponent, // http://localhost:4200/product 
        canActivateChild: [AuthGuardService], // Apply guard to all child routes
        children: [
            {
                path: ':id/:name',
                component: ProductComponent
            }
        ] // http://localhost:4200/product/1/abc
    },

    { path: 'page-not-found', component: PageNotFoundComponent }, // http://localhost:4200/page-not-found

    { path: '**', redirectTo: 'page-not-found' } // http://localhost:4200/otherthing
];
