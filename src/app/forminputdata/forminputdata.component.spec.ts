import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForminputdataComponent } from './forminputdata.component';

describe('ForminputdataComponent', () => {
  let component: ForminputdataComponent;
  let fixture: ComponentFixture<ForminputdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForminputdataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForminputdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
