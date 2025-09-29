import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowcontrolwithswitchComponent } from './flowcontrolwithswitch.component';

describe('FlowcontrolwithswitchComponent', () => {
  let component: FlowcontrolwithswitchComponent;
  let fixture: ComponentFixture<FlowcontrolwithswitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlowcontrolwithswitchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlowcontrolwithswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
