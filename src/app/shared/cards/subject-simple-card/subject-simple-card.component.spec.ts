import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectSimpleCardComponent } from './subject-simple-card.component';

describe('SubjectSimpleCardComponent', () => {
  let component: SubjectSimpleCardComponent;
  let fixture: ComponentFixture<SubjectSimpleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectSimpleCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SubjectSimpleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
