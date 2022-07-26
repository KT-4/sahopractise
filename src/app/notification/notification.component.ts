import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  constructor(private notificationsubject:NotificationService) { }

  ngOnInit(): void {
  }

  sendNotification(data:any){
     this.notificationsubject.next(data)
  }

}
