import { Component} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalContentComponent } from '../modal-content/modal-content.component';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {

   modalRef: BsModalRef;
   user: string;
   isAdvisor : boolean = false;

  constructor(private modalService: BsModalService,private router: Router,private authService: AuthService,) { }

  list:any[] = ["Hierarchy","Customer", "Orders","Schedules", "Messages", "Email"]

  ngOnInit() {
  }


  openModal(selected : any, key: any, label : any) {
  if(selected == "Customer"){
    this.router.navigate(['/customerDetails']);
    }

  
    if(selected == "Orders"){
        this.router.navigate(['/details']);

    } 
  if(selected == "Hierarchy"){
    let categories:any = [];
       this.authService.getHierachy().subscribe(
      data => {
        categories.push(data.entity.nodeStandardMetadata);
            let s = JSON.stringify(categories);
              s=s.split("nodeId").join("id")
              s=s.split("nodeName").join("text")
              s=s.split("children").join("child")
              let tree = JSON.parse(s);
              localStorage.setItem("tree",JSON.stringify(tree));
              this.router.navigate(['/hierarchy']);
      },
      err => {
      alert("error");
      }
    );

  }
  }
}
