import { Component } from '@angular/core';

@Component({
  selector: 'app-eventdata',
  imports: [],
  templateUrl: './eventdata.component.html',
  styleUrl: './eventdata.component.css'
})
export class EventdataComponent {
  handleEvent(event:any){
    //console.log(event);
    console.log(event.target);
  }
}
