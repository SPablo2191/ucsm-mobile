import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectCarouselComponent } from './subject-carousel.component';

describe('SubjectCarouselComponent', () => {
  let component: SubjectCarouselComponent;
  let fixture: ComponentFixture<SubjectCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectCarouselComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SubjectCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
