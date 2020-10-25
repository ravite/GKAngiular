import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { HttpService } from '../http.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import '../retirement/retirement.component'
import accounts from '../../assets/accounts.json';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.scss']
})
export class ModalContentComponent implements OnInit {

  title: string;
  closeBtnName: string;
  details: any;
  selectedKey: string;
  accountNumber: any;
  chargeDate: any;
  accountNumbers: Array<string>
  form: FormGroup;


  constructor(public bsModalRef: BsModalRef, private fb: FormBuilder, private httpService: HttpService) { }

  ngOnInit() {
    this.accountNumbers = accounts.accountNumbers;
    this.form = this.fb.group({
      accountControl: this.details[this.selectedKey]
    });
    this.accountNumber = this.details[this.selectedKey];

  }

  // getAccounts() {
  //   this.httpService.getAccounts().subscribe((responseBody) => {
  //   });
  // }

  save() {
    this.details[this.selectedKey] = this.accountNumber;
    this.bsModalRef.hide();
  }
}