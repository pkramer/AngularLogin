import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AuthenticatedResponse } from './../_interface/authenticated-response.model';
import { LoginModel } from './../_interface/login.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin: boolean | undefined;
  credentials: LoginModel = {email:'', password:''};
  public loginValid = true;
  public username = '';
  public password = '';

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    
  }

  public onSubmit(): void {
    this.credentials.email = this.username;
    this.credentials.password = this.password;
    this.loginValid = true;

    this.http.post<AuthenticatedResponse>("https://localhost:5001/api/accounts/login", this.credentials, {
      headers: new HttpHeaders({ "Content-Type": "application/json"})
    })
    .subscribe({
      next: (response: AuthenticatedResponse) => {
        const token = response.token;
        localStorage.setItem("jwt", token); 
        this.invalidLogin = false; 
        this.router.navigate(["/"]);
      },
      error: (err: HttpErrorResponse) => this.invalidLogin = true
    })
}
}