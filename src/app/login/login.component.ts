import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

// Note : API calls are getting 404 notfound and implemenatation is done and commented 
//for runing flow using static JSON

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,private authService: AuthService, private tokenStorage: TokenStorageService) { }
  user: FormGroup;
  displayError: boolean = false;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';


  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.router.navigate(['/home']);

      // this.roles = this.tokenStorage.getUser().roles;
    }
    this.user = new FormGroup({
      userName: new FormControl(''),
      password: new FormControl(''),
    });
  }


  // submit() {
  //   let user = this.user.value;
  //   let validUser = (user.userName == "gkuitest" && user.password == "gkuitest") || (user.userName == "advisor" && user.password == "advisor");
  //   localStorage.setItem('user', user.userName);
  //   validUser ? this.navigate() : this.displayError = true;
  // }

  // navigate() {
  //   let user = this.user.value;
  //   if (user.userName == "gkuitest") {
  //     this.router.navigate(['/home']);
  //   }
  // }


  submit() {
    let user = this.user.value;
    let reqData = {
      userName: user.userName,
      password: user.password
    }
    this.authService.loginUser(reqData).subscribe(
      data => {
        this.tokenStorage.saveToken(data.key);
            this.tokenStorage.saveUser(data);
            this.isLoginFailed = false;
            this.isLoggedIn = true;
            this.router.navigate(['/home']);
      },
      err => {
        this.errorMessage = 'Invalid Credintials';
        this.isLoginFailed = true;
      }
    );


    // if(user.userName == "gkuitest" && user.password == "gkuitest"){
    //   let data = this.authService.login(reqData);      
    //     this.tokenStorage.saveToken(data.key);
    //     this.tokenStorage.saveUser(data);
    //     this.isLoginFailed = false;
    //     this.isLoggedIn = true;
    //     this.router.navigate(['/home']);
    // }
//  else{
//       this.errorMessage = 'Invalid Credintials';
//       this.isLoginFailed = true;
//     }
    


  }
}
