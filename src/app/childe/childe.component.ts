import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-childe',
  templateUrl: './childe.component.html',
  styleUrls: ['./childe.component.css']
})
export class ChildeComponent implements OnInit {

  @Input() namedata:any

  constructor() { }

  ngOnInit(): void {
  }

}
