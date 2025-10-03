import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculasComponent } from './calculas.component';

describe('CalculasComponent', () => {
  let component: CalculasComponent;
  let fixture: ComponentFixture<CalculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
