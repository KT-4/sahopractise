import { Component, HostListener,Inject} from '@angular/core';
import { inject } from '@angular/core/testing';
  
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sahopractise';
  // constructor(@Inject(MyserviceService)myserviceService){
  //   console.log(myserviceService)
  //   console.log("hii this is component.....")
  // }
  // // @Input()
  // inputexample:any;
  // }
  // @HostListener('click',['$event'])
  //  onhostClick(event:Event){
  //    alert('hii kashyap')
  // //  }
  //  @HostListener('mouseover') onmouseover(){
  //    console.log('mouse over')
  //  }
}
