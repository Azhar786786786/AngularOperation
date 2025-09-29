import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowcontrolComponent } from './flowcontrol.component';

describe('FlowcontrolComponent', () => {
  let component: FlowcontrolComponent;
  let fixture: ComponentFixture<FlowcontrolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlowcontrolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlowcontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
