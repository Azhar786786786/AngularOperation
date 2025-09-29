import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoopwithforComponent } from './loopwithfor.component';

describe('LoopwithforComponent', () => {
  let component: LoopwithforComponent;
  let fixture: ComponentFixture<LoopwithforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoopwithforComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoopwithforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
