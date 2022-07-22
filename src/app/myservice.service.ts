import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
   private  Subject = new Subject<string>()
  constructor(private Http:HttpClient) { }


  sendMessage(message:string){
    this.Subject.next(message)

  }

  receiveMessage():Observable<string>{
    return this.Subject.asObservable()

  }


  getusers(){
  
     let headerss = new HttpHeaders({
        'content-type':'application/json',
        'authentication':'123456'
     });

     const paramss =  new HttpParams().set('pageSize','10',).set('pageOptions','100')


     return this.Http.get('https://jsonplaceholder.typicode.com/users',{headers:headerss,params:paramss})
  }
}
