/* ---------------------- Functional interceptor ---------------------- */

import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

// import { HttpInterceptorFn } from "@angular/common/http";

// export const customHeaderInnterceptor : HttpInterceptorFn = (req,next) => {
//     const modifiedRequest = req.clone({
//         setHeaders:{
//             'custom-header-1': 'custom-header-value-1',
//             'custom-header-2': 'custom-header-value-2'
//         },
//         headers: req.headers.set('custom-header','custom-header-value')
//     });
//     return next(modifiedRequest);
// }


/* ---------------------- DI-based interceptor ---------------------- */

export class CustomHeaderInnterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const modifiedRequest = req.clone({
            setHeaders: {
                'custom-header-1': 'custom-header-value-1',
                'custom-header-2': 'custom-header-value-2'
            },
            headers: req.headers.set('custom-header', 'custom-header-value')
        });
        return next.handle(modifiedRequest);
    }
}