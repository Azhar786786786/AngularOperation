import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormdatawithclassComponent } from './formdatawithclass.component';

describe('FormdatawithclassComponent', () => {
  let component: FormdatawithclassComponent;
  let fixture: ComponentFixture<FormdatawithclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormdatawithclassComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormdatawithclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
