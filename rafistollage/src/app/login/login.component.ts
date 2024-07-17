import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  registerData = {
    username: '',
    email: '',
    numero: '',
    quartier: '',
    dateN: '',
    statut: '',
    password: '',
    confirmPassword: ''
  };

  loginData = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  signup() {
    if (this.registerData.password !== this.registerData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    
    this.authService.register(this.registerData).subscribe(
      response => {
        console.log('Registration successful', response);
        alert('Registration successful!');
        this.router.navigate(['/login']);
      },
      error => {
        console.error('Error registering', error);
        alert('Registration failed!');
      }
    );
  }

  login() {
    this.authService.login(this.loginData).subscribe(
      response => {
        console.log('Login successful', response);
        localStorage.setItem('token', response.token);
        this.router.navigate(['/dashboard']); // Redirect to dashboard or desired page after login
      },
      error => {
        console.error('Error logging in', error);
        alert('Login failed!');
      }
    );
  }
}
