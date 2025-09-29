import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalwithcomputedComponent } from './signalwithcomputed.component';

describe('SignalwithcomputedComponent', () => {
  let component: SignalwithcomputedComponent;
  let fixture: ComponentFixture<SignalwithcomputedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalwithcomputedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalwithcomputedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
