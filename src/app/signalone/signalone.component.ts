import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signalone',
  imports: [],
  templateUrl: './signalone.component.html',
  styleUrl: './signalone.component.css'
})
export class SignaloneComponent {

  data : WritableSignal<number|string> = signal(20);
  count1:Signal<number>=computed(()=>200);

count=signal(10);

constructor(){
  effect(()=>{
    console.log(this.count());
  })
}
IncData(){
  this.count.set(this.count()+1);
  //this.count.update((val)=>val+1);
}

updatedData(val:string){
if(val=='inc'){
  this.count.set(this.count()+1);
}
else if(val=='desc'){
  this.count.set(this.count()-1);

}

}

}
