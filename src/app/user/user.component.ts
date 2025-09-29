import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

firstName:string="Azhar";
middleName:string="Hussain";
lastName:string="Khan";

handleFirstName(){
  this.firstName="Azhaan";
}
handleMiddleName(){
  this.middleName="Mere";
}
handleLastName(){
  this.lastName="Laal";
}
handleResetName(){
  this.firstName="Azhar";
  this.middleName="Hussain";
  this.lastName="Khan";
}

}
