import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  notificationCounter = 0;
  @Output() sendnotification = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  SendNotification() {
    this.notificationCounter = this.notificationCounter + 1;
    const counter = this.notificationCounter.toString();
  //  this.sendnotification.emit(counter);
    console.log('Notification send');
  }
}
