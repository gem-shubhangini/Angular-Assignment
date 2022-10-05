import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';

@Component({
  selector: 'app-inputadd',
  templateUrl: './inputadd.component.html',
  styleUrls: ['./inputadd.component.css']
})
export class InputaddComponent implements OnInit {
  val:string[]=[]
  constructor() { }
  @Output() parentFunction:EventEmitter<string[]> =new EventEmitter();
  @Input() sentvalue: string | undefined ;
 
  ngOnInit(): void {
  }
  sendData(){
   
    if(this.sentvalue){
      this.val.push(this.sentvalue)
      this.parentFunction.emit(this.val)
    }
  }
}
