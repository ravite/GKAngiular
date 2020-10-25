import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
customers:any = [];
  constructor(private router:Router) { }

  ngOnInit() {
    this.customers =["Customer1","Customer2","Customer3","Customer4"];
  }

  navigateToRetirement(){
    this.router.navigate(['/retirement']);
  }
}
