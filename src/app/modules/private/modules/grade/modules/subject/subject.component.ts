import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription, map } from 'rxjs';
import { PartialEnrollment } from 'src/app/project/interfaces/enrollment.interface';
import { PartialSemester } from 'src/app/project/interfaces/semester.interface';
import { PartialStudent } from 'src/app/project/interfaces/student.interface';
import { PartialSubjectRegistration } from 'src/app/project/interfaces/subject.registration.interface';
import { SubjectService } from 'src/app/project/services/python/subject.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.scss',
})
export class SubjectComponent implements OnInit {
  title: String = 'Materias';
  protected semesters$!: Observable<PartialSemester[]>;
  protected selectedSemester: PartialSemester = {};
  subjects$!: Observable<PartialSubjectRegistration[]>;
  subscriptions$: Subscription = new Subscription();
  constructor(
    private router: Router,
    private subjectService: SubjectService,
  ) {}
  ionViewDidLeave() {
    this.subscriptions$.unsubscribe();
  }
  ngOnInit(): void {
    this.getSemester();
    this.getSubjects();
  }
  getSemester() {
    this.semesters$ = this.subjectService.getSemesters();
  }
  getSubjects_per_semester(semester?: PartialSemester) {
    let enrollmentId = localStorage.getItem('enrollment_id');
    if (semester) this.selectedSemester = semester;
    if (enrollmentId) this.subjects$ = this.subjectService.getSubjects(enrollmentId, this.selectedSemester?.id);
  }
  getSubjects() {
    let enrollmentId = localStorage.getItem('enrollment_id');
    if (enrollmentId) this.subjects$ = this.subjectService.getSubjects(enrollmentId);
  }
  goToSubjectDescription(subject: PartialSubjectRegistration) {
    this.router.navigate([
      '/private/career/grade/subject-description',
      {
        id: subject.id,
      },
    ]);
  }
}
