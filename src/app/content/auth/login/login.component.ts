import { TokenStorageService } from './../../../services/token-storage.service';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {
    username: null,
    password: null
  }

  isLoginFailed = false;
  isLoggedIn = false;
  errorMessage = "";

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) { }

  onSubmit(): void {
    const {username, password} = this.form;

    this.authService.login(username, password).subscribe({
      next: data => {
        this.tokenStorage.saveToken(data.token)
        this.tokenStorage.saveUser(data.user);
        this.isLoginFailed = false;
        this.goToHome();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    })
  }

  goToHome():void {
    this.router.navigate(['/']).then( () => window.location.reload());
  }

  ngOnInit(): void {
    if(this.tokenStorage.getToken()){
      this.isLoggedIn = true;
    }
  }

}
