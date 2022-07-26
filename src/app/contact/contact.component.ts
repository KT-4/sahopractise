import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
   
  constructor(private notificationservice:NotificationService) { }

  ngOnInit(): void {
  }
  sendMessage(data:any){
     this.notificationservice.sendNotification(data.value)  
  }
}
