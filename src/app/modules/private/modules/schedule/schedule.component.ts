import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, map } from 'rxjs';
import { PartialSubjectRegistration } from 'src/app/project/interfaces/subject.registration.interface';
import { SubjectService } from 'src/app/project/services/python/subject.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css',
})
export class ScheduleComponent implements OnInit {
  subjects$!: Observable<PartialSubjectRegistration[]>;
  subjects: PartialSubjectRegistration[] = [];
  protected subscriptions$: Subscription = new Subscription();
  constructor(private scheduleService: SubjectService) {}
  ngOnInit(): void {
    this.getSchedule();
  }
  ionViewDidLeave() {
    this.subscriptions$.unsubscribe();
  }
  getSchedule() {
    let enrollmentId = localStorage.getItem('enrollment_id');
    if (enrollmentId)
      this.subscriptions$.add(
        this.scheduleService
          .getSubjects(enrollmentId)
          .pipe(
            map((response) => {
              this.subjects = response;
            }),
          )
          .subscribe(),
      );
  }
}
