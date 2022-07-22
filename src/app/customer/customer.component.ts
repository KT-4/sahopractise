import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
   
  users:any
  constructor(private myservice:MyserviceService) { }

  ngOnInit(): void {
    this.myservice.getusers().subscribe(data =>{
      this.users = data;
    })
  }

}
