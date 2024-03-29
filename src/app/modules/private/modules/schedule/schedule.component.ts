import { Component, OnInit } from '@angular/core';
import { Subscription, map } from 'rxjs';
import { PartialEnrollment } from 'src/app/project/interfaces/enrollment.interface';
import { PartialStudent } from 'src/app/project/interfaces/student.interface';
import { PartialSubjectRegistration } from 'src/app/project/interfaces/subject.registration.interface';
import { ScheduleService } from 'src/app/project/services/php/schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css',
})
export class ScheduleComponent implements OnInit {
  protected student!: PartialStudent;
  protected enrollment!: PartialEnrollment;
  protected subjects: PartialSubjectRegistration[] = [];
  protected subscriptions$: Subscription = new Subscription();
  constructor(private scheduleService: ScheduleService) {}
  ngOnInit(): void {
    let studentStoraged = localStorage.getItem('student');
    let enrollmentSelectedStoraged = localStorage.getItem('enrollmentSelected');
    if (studentStoraged) {
      this.student = JSON.parse(studentStoraged);
    }
    if (enrollmentSelectedStoraged) {
      this.enrollment = JSON.parse(enrollmentSelectedStoraged);
      this.getSchedule();
    }
  }
  ionViewDidLeave() {
    this.subscriptions$.unsubscribe();
  }
  getSchedule() {
    this.subscriptions$.add(
      this.scheduleService
        .getSchedule(this.enrollment.code || '')
        .pipe(
          map((subjects) => {
            this.subjects = subjects;
          }),
        )
        .subscribe(),
    );
  }
}
