import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { PartialEnrollment } from 'src/app/project/interfaces/enrollment.interface';
import { PartialStudent } from 'src/app/project/interfaces/student.interface';
import { SubjectService } from 'src/app/project/services/php/subject.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.scss',
})
export class SubjectComponent implements OnInit {
  title: String = '';
  protected student!: PartialStudent;
  protected enrollment!: PartialEnrollment;
  subscriptions$: Subscription = new Subscription();
  constructor(
    private route: ActivatedRoute,
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
    this.subscriptions$.add(
      this.route.paramMap.subscribe((params) => {
        this.title = params.get('title') || '';
      }),
    );
    this.getSemester();
  }
  getSemester() {
    this.subjectService.getSemesters(this.enrollment.code || '').subscribe();
  }
}
