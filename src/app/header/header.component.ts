import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  exForm!:FormGroup;

  constructor(private myservice:MyserviceService) { }

  ngOnInit(): void {
    // this.exForm = new FormGroup({
    //   'name':new FormControl('',Validators.required),
    //   'email':new FormControl('',[Validators.required,Validators.email,Validators.pattern("/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/")]),
    //   'phone':new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"),Validators.minLength(10),Validators.maxLength(10)]),
    //   'message':new FormControl('',[Validators.required,Validators.minLength(15)])
    // }) 
 }

//  cliCksub(){
//    console.log(this.exForm.value)
//    this.exForm.reset()
//  }

sendMessage(message:any){
  this.myservice.sendMessage(message)
}

}