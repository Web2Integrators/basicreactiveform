import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usedirective',
  templateUrl: './usedirective.component.html',
  styleUrls: ['./usedirective.component.scss']
})
export class UsedirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('init of cmp');
  }

}
