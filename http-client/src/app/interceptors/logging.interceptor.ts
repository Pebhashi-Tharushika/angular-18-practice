import { HttpInterceptorFn } from "@angular/common/http";

export const loggingInterceptor:HttpInterceptorFn = (req, next)=>{
    console.log(`Request ${JSON.stringify(req)}`);
    console.log(`Requesting ${req.url}`);
    return next(req);
}