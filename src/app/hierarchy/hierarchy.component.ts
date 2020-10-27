import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';


declare var $: any;

@Component({
  selector: 'app-hierarchy',
  templateUrl: './hierarchy.component.html',
  styleUrls: ['./hierarchy.component.scss']
})
export class HierarchyComponent implements OnInit {


  fields = {

    dataSource: [
 
      ]
 
    }
  constructor(private router: Router,private authService: AuthService,) { }

categories:any = [

];


  ngOnInit() {
 
  let tree = JSON.parse(localStorage.getItem("tree"));
      this.fields.dataSource=tree;
  }

  back() {
    this.router.navigate(['/home']);
  }

}
