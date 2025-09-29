import { Component } from '@angular/core';

@Component({
  selector: 'app-inputdetails',
  imports: [],
  templateUrl: './inputdetails.component.html',
  styleUrl: './inputdetails.component.css'
})
export class InputdetailsComponent {
name="";
displayName="";
email="";
displayEmail="";
getName(event:Event){
 const name=(event.target as HTMLInputElement).value
  //alert(name);
  this.name=name;
}
showName(){
  this.displayName=this.name;
}
setName(){
  this.name="Azhar Hussain Khan";
}

getEmail(event:Event){
  const email=(event.target as HTMLInputElement).value
   //alert(name);
   this.email=email;
 }

 showEmail(){
  this.displayEmail=this.email;
}
 
 setEmail(){
   this.email="talkazhar786@hotmail.com";
 }
}
