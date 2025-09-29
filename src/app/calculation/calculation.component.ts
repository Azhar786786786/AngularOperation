import { Component } from '@angular/core';

@Component({
  selector: 'app-calculation',
  imports: [],
  templateUrl: './calculation.component.html',
  styleUrl: './calculation.component.css'
})
export class CalculationComponent {

name:string="";
nameReverse:string="";
dt:string="";
num=0;
ReverseMethod(nm:string){
  this.name=nm;
  this.nameReverse=nm.split('').reverse().join('');
}

sayHi(){
  this.name="Hello user";
}

handleSearch(data:string){
this.dt=data;
alert(this.dt);
}

}
