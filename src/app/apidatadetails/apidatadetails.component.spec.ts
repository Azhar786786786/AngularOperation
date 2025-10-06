import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApidatadetailsComponent } from './apidatadetails.component';

describe('ApidatadetailsComponent', () => {
  let component: ApidatadetailsComponent;
  let fixture: ComponentFixture<ApidatadetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApidatadetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApidatadetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
