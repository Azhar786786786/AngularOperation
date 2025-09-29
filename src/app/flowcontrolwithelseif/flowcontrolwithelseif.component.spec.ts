import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowcontrolwithelseifComponent } from './flowcontrolwithelseif.component';

describe('FlowcontrolwithelseifComponent', () => {
  let component: FlowcontrolwithelseifComponent;
  let fixture: ComponentFixture<FlowcontrolwithelseifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlowcontrolwithelseifComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlowcontrolwithelseifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
