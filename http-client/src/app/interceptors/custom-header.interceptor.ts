import { HttpInterceptorFn } from "@angular/common/http";

export const customHeaderInnterceptor : HttpInterceptorFn = (req,next) => {
    const modifiedRequest = req.clone({
        setHeaders:{
            'custom-header-1': 'custom-header-value-1',
            'custom-header-2': 'custom-header-value-2'
        }
    });
    return next(modifiedRequest);
}