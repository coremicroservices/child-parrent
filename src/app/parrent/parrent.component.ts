import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parrent',
  templateUrl: './parrent.component.html',
  styleUrls: ['./parrent.component.scss']
})
export class ParrentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  changenotification(event){
    console.log(event);
  }

}
