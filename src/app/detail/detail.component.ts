import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  showMe:boolean=false
  count=0;
  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.count++;
    this.showMe=!this.showMe
  }
}
