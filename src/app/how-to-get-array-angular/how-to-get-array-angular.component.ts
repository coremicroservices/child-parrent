import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-to-get-array-angular',
  templateUrl: './how-to-get-array-angular.component.html',
  styleUrls: ['./how-to-get-array-angular.component.scss']
})
export class HOWTOGETArrayAngularComponent implements OnInit {

  fruits = ['Apple', 'Orange', 'Banana', 'blackberry', 'blackcurrant', 'blueberry', 'cherry'
    , 'coconut'
    , 'fig'
    , 'grape'
    , 'grapefruit'
    , 'kiwifruit  '
    , 'lemon'
    , 'lime'
    , 'lychee'
    , 'mandarin'
    , 'mango '
    , 'melon '
    , 'nectarine '
    , 'orange'
    , 'papaya '
    , 'passion fruit '
    , 'peach  '
    , 'pear'
    , 'pineapple'
    , 'plum'
    , 'pomegranate'
    , 'quince'
    , 'raspberry'
    , 'strawberry'
    , 'watermelon'];
  item = '';
  foundItem = '';

  constructor() { }

  ngOnInit() {
  }

  GetValue() {
    this.foundItem = this.fruits.find(x => x.toUpperCase() === this.item.toUpperCase());
  }

}
