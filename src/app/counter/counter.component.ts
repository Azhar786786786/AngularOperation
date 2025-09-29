import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
counter:number=0;
handleCounter(val:string){
  if(val=='plus'){
this.counter+=1;
  }
  else if(val=='minus'){
    this.counter-=1;
  }
  else{
    this.counter=0;
  }
}
}
