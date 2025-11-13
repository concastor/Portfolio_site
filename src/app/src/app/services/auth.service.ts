import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;
  private readonly correctPassword = 'JakeR'; // In production, never store passwords like this!

  checkPassword(password: string): boolean {
    if (password === this.correctPassword) {
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
