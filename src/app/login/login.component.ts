import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
  user: FormGroup;
  displayError: boolean = false;

  ngOnInit() {
    this.user = new FormGroup({
      userName: new FormControl(''),
      password: new FormControl(''),
    });
  }


  submit() {
    let user = this.user.value;
    let validUser = (user.userName == "gkuitest" && user.password == "gkuitest") || (user.userName == "advisor" && user.password == "advisor");
    localStorage.setItem('user', user.userName);
    validUser ? this.navigate() : this.displayError = true;
  }

  navigate() {
    let user = this.user.value;
    if (user.userName == "gkuitest") {
      this.router.navigate(['/retirement']);
    }
  }
}
