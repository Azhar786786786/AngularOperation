import { Component } from '@angular/core';

@Component({
  selector: 'app-flowcontrolwithelseif',
  imports: [],
  templateUrl: './flowcontrolwithelseif.component.html',
  styleUrl: './flowcontrolwithelseif.component.css'
})
export class FlowcontrolwithelseifComponent {
color:number=2;

handleColor(val:number){
  this.color=val;
}

handleInput(evnt:Event){
  this.color=parseInt((evnt.target as HTMLInputElement).value);
}

}
