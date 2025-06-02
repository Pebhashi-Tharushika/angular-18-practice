import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { provideHttpClient, withInterceptors, withRequestsMadeViaParent } from '@angular/common/http';
import { responseLoggingInterceptor } from './interceptors/response-logging.interceptor';

export const routes: Routes = [
    {
        path: 'users',
        component: UsersComponent,
        providers: [provideHttpClient(withInterceptors([responseLoggingInterceptor]), withRequestsMadeViaParent())]
    }
];
