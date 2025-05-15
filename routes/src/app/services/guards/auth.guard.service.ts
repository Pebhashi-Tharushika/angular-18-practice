import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../auth.service";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild {

    constructor(private authService: AuthService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {

        return this.authService.isUserLoggedIn().then((isLoggedIn) => {
            if (isLoggedIn) {
                return true;
            } else {
                this.router.navigate(['/']); // navigate to home page (root path)
                return false;
            }

        });
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean>  {
        return this.canActivate(childRoute, state); // same logic as canActivate
    }

}