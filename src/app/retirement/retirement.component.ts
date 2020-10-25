import { Component} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalContentComponent } from '../modal-content/modal-content.component';

@Component({
  selector: 'app-retirement',
  templateUrl: './retirement.component.html',
  styleUrls: ['./retirement.component.scss']
})
export class RetirementComponent  {

  retirementDetails : any;
   modalRef: BsModalRef;
   user: string;
   isAdvisor : boolean = false;

  constructor(private modalService: BsModalService) { }

  list:any[] = ["Hierarchy","Customer", "Orders","Schedules", "Messages", "Email"]

  ngOnInit() {
    this.retirementDetails = {
      creationDate : new Date(),
      accountNumber : '00787654789',
      chargeDate : '1 of the month',
      status : 'Monthly Charge',
      investmentAmount : 50000,
      accumulatedInvestmentAmount: 9000,
      currentMarketValue : 8000
    }
    this.checkTheUserRole();
  }

  checkTheUserRole(){
    this.user = localStorage.getItem('user');
    this.user == 'user' ? this.isAdvisor = false: this.isAdvisor = true;
  }

  openModal(selected : any, key: any, label : any) {
    const initialState = {
      title : label,
      details : selected,
      selectedKey : key
      
    };
    this.modalRef = this.modalService.show(ModalContentComponent, {initialState});
    this.modalRef.content.closeBtnName = 'Close';
  }

}
