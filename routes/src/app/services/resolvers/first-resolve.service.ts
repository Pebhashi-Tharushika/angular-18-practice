import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, MaybeAsync, Resolve, RouterStateSnapshot } from "@angular/router";

interface IFirstResolveService {
    name:string;
    age:number;
}

@Injectable({
    providedIn: 'root'
})
// This service is used to resolve data before the route is activated
export class FirstResolveService implements Resolve<IFirstResolveService> {
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IFirstResolveService {
        return{name: "Saman", age: 25};
    }
  
}