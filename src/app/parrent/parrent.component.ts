import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parrent',
  templateUrl: './parrent.component.html',
  styleUrls: ['./parrent.component.scss']
})
export class ParrentComponent implements OnInit {
  notificationCounter: number = 0;
  constructor() { }

  ngOnInit() {
  }

  changenotification($event) {
    this.notificationCounter = $event;
    console.log($event);
  }
}
