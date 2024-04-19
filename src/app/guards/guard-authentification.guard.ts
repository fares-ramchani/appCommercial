import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.loginService.isConnecter) {
      return true; // L'utilisateur est authentifié, permet l'accès à la route
    } else {
      // L'utilisateur n'est pas authentifié, redirige vers la page de connexion
      this.router.navigate(['/']);
      return false;
    }
  }
}
