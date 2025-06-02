import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
// import { loggingInterceptor } from './interceptors/logging.interceptor';
import { customHeaderInnterceptor } from './interceptors/custom-header.interceptor';
import { responseLoggingInterceptor } from './interceptors/response-logging.interceptor';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
// import { CustomHeaderInnterceptor } from './interceptors/custom-header.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([customHeaderInnterceptor, responseLoggingInterceptor]), withInterceptorsFromDi()),
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: CustomHeaderInnterceptor,
    //   multi: true
    // },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggingInterceptor,
      multi: true
    }
  ]
};
