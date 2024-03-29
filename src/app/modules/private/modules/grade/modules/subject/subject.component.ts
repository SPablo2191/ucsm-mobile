import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription, map } from 'rxjs';
import { PartialEnrollment } from 'src/app/project/interfaces/enrollment.interface';
import { PartialSemester } from 'src/app/project/interfaces/semester.interface';
import { PartialStudent } from 'src/app/project/interfaces/student.interface';
import { PartialSubjectRegistration } from 'src/app/project/interfaces/subject.registration.interface';
import { SubjectService } from 'src/app/project/services/php/subject.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.scss',
})
export class SubjectComponent implements OnInit {
  title: String = 'Materias Aprobadas';
  protected student!: PartialStudent;
  protected enrollment!: PartialEnrollment;
  protected semesters: PartialSemester[] = [];
  protected selectedSemester: PartialSemester = {};
  protected subjects: PartialSubjectRegistration[] = [];
  subscriptions$: Subscription = new Subscription();
  constructor(
    private router: Router,
    private subjectService: SubjectService,
  ) {}
  ionViewDidLeave() {
    this.subscriptions$.unsubscribe();
  }
  ngOnInit(): void {
    let studentStoraged = localStorage.getItem('student');
    let enrollmentSelectedStoraged = localStorage.getItem('enrollmentSelected');
    if (studentStoraged) {
      this.student = JSON.parse(studentStoraged);
    }
    if (enrollmentSelectedStoraged) {
      this.enrollment = JSON.parse(enrollmentSelectedStoraged);
    }
    this.getSemester();
  }
  getSemester() {
    this.subscriptions$.add(
      this.subjectService
        .getSemesters(this.enrollment.code || '')
        .pipe(
          map((semesters) => {
            this.semesters = semesters;
            this.selectedSemester = this.semesters[0];
            this.getSubjects();
          }),
        )
        .subscribe(),
    );
  }
  getSubjects(semester?: PartialSemester) {
    if (semester) this.selectedSemester = semester;
    this.subscriptions$.add(
      this.subjectService
        .getGrades(this.enrollment.code || '', this.selectedSemester.id || '')
        .pipe(
          map((subjects) => {
            this.subjects = subjects;
          }),
        )
        .subscribe(),
    );
  }
  goToSubjectDescription(subject: PartialSubjectRegistration) {
    if (subject && subject.subject) {
      subject.subject.semester = this.selectedSemester;
    }
    localStorage.setItem('subjectSelected', JSON.stringify(subject));
    this.router.navigate(['/private/career/grade/subject-description']);
  }
}
