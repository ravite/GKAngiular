import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';
import { AuthService } from '../_services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router, private tokenStorage: TokenStorageService,private authService: AuthService,) { }
  user = "";

  ngOnInit() {
    this.user = this.tokenStorage.getUser();
  }
  logout(){
 
      this.authService.logOut().subscribe(
        data => {
          this.tokenStorage.signOut();
    this.router.navigate(['/login'])
        },
        err => {
          alert("error");
        }
      );
    
   
  }

}
