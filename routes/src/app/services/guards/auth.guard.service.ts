import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../auth.service";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

    constructor(private authService: AuthService,private router:Router ) { }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{

        let isUserLoggedIn = this.authService.isUserLoggedIn();

        if(isUserLoggedIn) {
            return true;
        }else{
            this.router.navigate(['/']); // navigate to home page (root path)
            return false;
        }
        
    }
    
}