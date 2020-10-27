import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';




@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {

  customerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private router: Router,private authService: AuthService,) { }
  ngOnInit() {
    this.customerForm = this.formBuilder.group({
      customerName: ['', Validators.required],
      age: ['', Validators.required],
      address: ['', Validators.required],
      
  }
  );

  }

  onSubmit() {
    this.submitted = true;

    if (this.customerForm.invalid) {
        return;
    }

       this.authService.create(this.customerForm.value).subscribe(
      data => {
        alert("SUCCESS")
        this.router.navigate(['/home']);
      },
      err => {
        alert('ERROR');
      }
    );

    
}

  get f() { return this.customerForm.controls; }

  back(){
    this.router.navigate(['/home']);

  }

}
