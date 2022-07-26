import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
 
     let obj = {fname:'kashyap',lname:'trivedi'}

    localStorage.setItem('userId',JSON.stringify(obj))
    localStorage.setItem('custId',JSON.stringify(obj))

    sessionStorage.setItem('sessionData','sessionStorage trivedi')

    // localStorage.removeItem('localData')
    // sessionStorage.removeItem('sessionData')
   
    //  localStorage.clear()
    //  sessionStorage.clear()
    
    console.log (localStorage.getItem('userId'))
    console.log (localStorage.getItem('custId'))
    console.log(sessionStorage.getItem('sessionData'))
  }

}
