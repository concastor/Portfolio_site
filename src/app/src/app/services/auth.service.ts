import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;
  // private readonly correctPassword = 'jaker';

  checkPassword(password: string): boolean {
    if (password.toLowerCase() === environment.correctPassword) {
      this.isAuthenticated = true;
      sessionStorage.setItem('authenticated', 'true');
      return true;
    }
    return false;
  }

  isLoggedIn(): boolean {
    return (
      this.isAuthenticated || sessionStorage.getItem('authenticated') === 'true'
    );
  }

  logout(): void {
    this.isAuthenticated = false;
    sessionStorage.removeItem('authenticated');
  }
}
