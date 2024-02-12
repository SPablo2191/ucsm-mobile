import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectDescriptionComponent } from './subject-description.component';

describe('SubjectDescriptionComponent', () => {
  let component: SubjectDescriptionComponent;
  let fixture: ComponentFixture<SubjectDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubjectDescriptionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SubjectDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
