import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  response:any;

  constructor(private router: Router,private authService: AuthService,) { }

  ngOnInit() {
    this.getOrders();
  }

  getOrders(){
    this.authService.details().subscribe(
      data => {
       this.response = data;
      },
      err => {
      alert("error")
      }
    );
  }
  
  
back(){
		this.router.navigate(['/home']);

	}
}
