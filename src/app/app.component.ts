import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SigninComponent } from './signin/signin.component';
import { CounterComponent } from './counter/counter.component';
import { EventdataComponent } from './eventdata/eventdata.component';
import { InputdetailsComponent } from './inputdetails/inputdetails.component';
import { FlowcontrolComponent } from './flowcontrol/flowcontrol.component';
import { FlowcontrolwithelseifComponent } from './flowcontrolwithelseif/flowcontrolwithelseif.component';
import { FlowcontrolwithswitchComponent } from './flowcontrolwithswitch/flowcontrolwithswitch.component';
import { LoopwithforComponent } from './loopwithfor/loopwithfor.component';
import { SignaloneComponent } from './signalone/signalone.component';
import { SignalwithcomputedComponent } from './signalwithcomputed/signalwithcomputed.component';
import { AlbumComponent } from './album/album.component';
import { CalculationComponent } from './calculation/calculation.component';

@Component({
  selector: 'app-root',
  imports: [UserComponent,
    LoginComponent,
    ProfileComponent,
    SigninComponent,
    CounterComponent,
  EventdataComponent,
InputdetailsComponent,
FlowcontrolComponent,
FlowcontrolwithelseifComponent,
FlowcontrolwithswitchComponent,
LoopwithforComponent,
SignaloneComponent,
SignalwithcomputedComponent,
AlbumComponent,
CalculationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
