import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { formsingup } from '../formgroup';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {


 

  constructor(private fb:FormBuilder) { }
   
   
 
   signupForm = new FormGroup({
     fname:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]*')]),
     lname:new FormControl('',[Validators.required,Validators.pattern('[a-z-A-Z]*')]),
     email:new FormControl('',[Validators.required,Validators.email]),
     phone:new FormControl('',[Validators.required,Validators.pattern('((\\+91-?)|0)?[0-9]{10}$')]),
     password:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(15)])
  })
   

     
 

  ngOnInit(): void {
      this.Postdata()
      // this.signupForm.valueChanges.subscribe(
      //    uname=>{
      //       console.log('fname changed','' + uname)
         
      // })
    
   
  }
  
     get F(){
          return this.signupForm.controls

     }
     Postdata(){
       this.signupForm.value
       console.log(this.signupForm.value)
     }
     


     resetForm(){
        this.signupForm.reset()

     }

}
