import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeDescriptionComponent } from './grade-description.component';

describe('GradeDescriptionComponent', () => {
  let component: GradeDescriptionComponent;
  let fixture: ComponentFixture<GradeDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GradeDescriptionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GradeDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
