import { Component } from '@angular/core';

@Component({
  selector: 'app-flowcontrol',
  imports: [],
  templateUrl: './flowcontrol.component.html',
  styleUrl: './flowcontrol.component.css'
})
export class FlowcontrolComponent {
display=false;
handleDisplayIn(){
  this.display=true;
}
handleDisplayOut(){
  this.display=false;
}
handleDisplayToggle(){
  this.display=!this.display;
}
}
