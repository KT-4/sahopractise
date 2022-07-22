import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactivearray',
  templateUrl: './reactivearray.component.html',
  styleUrls: ['./reactivearray.component.css']
})
export class ReactivearrayComponent implements OnInit {

  constructor() { }
  signupForm:any
  ngOnInit(): void {
    const arr = new FormArray([
      new FormControl('a',Validators.minLength(2)),
      new FormControl('kashyap')
    ])
    console.log(arr.value)
    console.log(arr.status)
  }

  // get F(){
  //   return this.signupForm.controls
 
  // }

}
