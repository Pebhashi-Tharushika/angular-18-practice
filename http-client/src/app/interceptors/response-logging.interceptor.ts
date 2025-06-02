import { HttpEventType, HttpInterceptorFn } from "@angular/common/http";
import { tap } from "rxjs";

export const responseLoggingInterceptor: HttpInterceptorFn = (req, next) => {
    return next(req).pipe(tap(event => {
        if (event.type === HttpEventType.Response) {
            console.log("Response Logging Interceptor: ", req.url);
            
            // console.log(`Response Status: ${event.status}`);
            // console.log(`Response ${JSON.stringify(event)}`);
        }
    }));
}