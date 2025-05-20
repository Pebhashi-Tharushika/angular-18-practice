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
import { FirstResolveService } from './services/resolvers/first-resolve.service';
import { canMathGuard } from './services/guards/can-math.guard';
import { UserListComponent } from './user-list/user-list.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { DefaultUserComponent } from './default-user/default-user.component';
import { HomeitemsComponent } from './homeitems/homeitems.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorHandler, inject } from '@angular/core';

const resolveTitle = () => Promise.resolve('Products');

export const routes: Routes = [
    { path: '', component: DashboardComponent }, // http://localhost:4200

    {
        path: 'first',
        title: 'First Component',
        component: FirstComponent,
        canDeactivate: [DeactivateGuardService],
        resolve: { data: FirstResolveService }
    }, // http://localhost:4200/first

    {
        path: 'second',
        title: 'Second Component',
        canActivate: [AuthGuardService],
        component: SecondComponent
    }, // http://localhost:4200/second

    {
        path: 'third',
        title: 'Third Component',
        loadComponent: () => import('./third/third.component').then(m => m.ThirdComponent),
        // component: ThirdComponent,
        // canMatch: [canMathGuard],
        data: { name: "Kamal", age: 30 }
    }, // http://localhost:4200/third

    {
        path: 'product',
        title: resolveTitle,
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

    {
        path: 'users',
        component: UserListComponent,
        data: { 'page': 1 },
        children: [
            { path: '', component: DefaultUserComponent },
            { path: 'edit/:id', component: EditUserComponent }
        ]
    },
    // {path:'users', component: UserListComponent}, // /users
    // {path:'users/edit/:id', component: EditUserComponent}, // /users/edit/1

    { path: 'home', component: HomeComponent },
    { path: 'home/items', component: HomeitemsComponent },

    // {path:'old-user-page', redirectTo: 'users', pathMatch:'full'}, // http://localhost:4200/old-user-page
    // {
    //     path: 'old-user-page', redirectTo: ({queryParams}) => {
    //         console.log(queryParams);
    //         return '/users';
    //     }, pathMatch: 'full'
    // },
    {
        path: 'old-user-page', redirectTo: ({queryParams}) => {
            const errorHandler = inject(ErrorHandler);
            const userId = queryParams['id'];
            if(userId!== undefined){
                return `/users/edit/${userId}`;
            }
            errorHandler.handleError(new Error('User ID is missing'));
            return '/users';
        }, pathMatch: 'full'
    },

    { path: '**', redirectTo: 'page-not-found' } // http://localhost:4200/anything
];
