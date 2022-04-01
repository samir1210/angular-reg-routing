import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
  
@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) { }
    canActivate(): boolean {
        if (JSON.parse(localStorage.getItem('loggedIn')) == true) {
            return true;
          } else {
            this.router.navigate(['/register']);
            return false;
          }
    }
}