import { Component } from '@angular/core';

@Component({
  selector: 'app-loopwithfor',
  imports: [],
  templateUrl: './loopwithfor.component.html',
  styleUrl: './loopwithfor.component.css'
})
export class LoopwithforComponent {

users=["Azhar","Hussain","Khan","Azhaan","Shaista","Khatoon","Salma","Nazma","Shaira"];

students=[
  {name:"Azhar",age:35,email:"azhar@gmail.com"},
  {name:"Azhaan",age:5,email:"azhaan@gmail.com"},
  {name:"Qasim",age:35,email:"qasim@gmail.com"},
  {name:"Shaista",age:25,email:"shaista@gmail.com"},
  {name:"Khatoon",age:25,email:"qasim@gmail.com"}
];

getName(name:string){
  console.log(name);
}

}
