import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AuthenticatedResponse } from './../_interface/authenticated-response.model';
import { LoginModel } from './../_interface/login.model';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from './../shared/services/authentication.service';
import { UserForRegistrationDto } from './../_interface/user/userForRegistrationDto.model';

@Component({
  selector: 'app-register-user',
  templateUrl: './../register-user/register-user.component.html',
  styleUrls: ['./../register-user/register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  invalidLogin: boolean | undefined;
  public loginValid = true;
  public firstName = '';
  public lastName = '';
  public username = '';
  public password = '';
  public confirmPassword = '';
  public errorMessage: string = '';
  public showError: boolean | undefined;

  constructor(private authService: AuthenticationService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    
  }

  public onSubmit(): void {
    this.loginValid = true;

    const user: UserForRegistrationDto = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.username,
      password: this.password,
      confirmPassword: this.confirmPassword
    };

    this.authService.registerUser("api/accounts/registration", user)
    .subscribe({
      next: () => {
        console.log("Successful registration"); 
        this.router.navigate(["/"]);
      },
      error: (err: HttpErrorResponse) => {
        this.errorMessage = err.message;
        this.showError = true;
      }
    })
  }
}