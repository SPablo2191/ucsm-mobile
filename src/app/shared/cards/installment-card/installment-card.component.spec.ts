import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallmentCardComponent } from './installment-card.component';

describe('InstallmentCardComponent', () => {
  let component: InstallmentCardComponent;
  let fixture: ComponentFixture<InstallmentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstallmentCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InstallmentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
