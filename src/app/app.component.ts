import { Component } from '@angular/core';
import { FormControl ,FormGroup, FormControlName} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment';
  sentvalue:string="";
  prev=0;
  list:any;
  listForm= new FormGroup({
    addedinput:new FormControl("")
  })
  getInput() {

   if(this.listForm.value.addedinput && this.listForm.value.addedinput!==''){
    this.sentvalue=this.listForm.value.addedinput;
   }
   else{
    this.sentvalue="";
   }
 
  }
  parentFunction(data:string[]){
    console.log("data",data)
    this.list=data;
  }
}
