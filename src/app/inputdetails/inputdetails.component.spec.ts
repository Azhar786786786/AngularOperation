import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputdetailsComponent } from './inputdetails.component';

describe('InputdetailsComponent', () => {
  let component: InputdetailsComponent;
  let fixture: ComponentFixture<InputdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputdetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
