import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemainingSubjectComponent } from './remaining-subject.component';

describe('RemainingSubjectComponent', () => {
  let component: RemainingSubjectComponent;
  let fixture: ComponentFixture<RemainingSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RemainingSubjectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RemainingSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
