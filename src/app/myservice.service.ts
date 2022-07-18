import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
   private  Subject = new Subject<string>()
  constructor() { }


  sendMessage(message:string){
    this.Subject.next(message)

  }

  receiveMessage():Observable<string>{
    return this.Subject.asObservable()

  }
}
