import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomDescriptionComponent } from './classroom-description.component';

describe('ClassroomDescriptionComponent', () => {
  let component: ClassroomDescriptionComponent;
  let fixture: ComponentFixture<ClassroomDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassroomDescriptionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClassroomDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
