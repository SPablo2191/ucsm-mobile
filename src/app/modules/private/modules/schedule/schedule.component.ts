import { Component, OnInit } from '@angular/core';
import { PartialEnrollment } from 'src/app/project/interfaces/enrollment.interface';
import { PartialStudent } from 'src/app/project/interfaces/student.interface';
import { ScheduleService } from 'src/app/project/services/php/schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css',
})
export class ScheduleComponent implements OnInit {
  protected student!: PartialStudent;
  protected enrollment!: PartialEnrollment;
  constructor(private scheduleService: ScheduleService) {}
  ngOnInit(): void {
    let studentStoraged = localStorage.getItem('student');
    let enrollmentSelectedStoraged = localStorage.getItem('enrollmentSelected');
    if (studentStoraged) {
      this.student = JSON.parse(studentStoraged);
    }
    if (enrollmentSelectedStoraged) {
      this.enrollment = JSON.parse(enrollmentSelectedStoraged);
    }
    this.getSchedule();
  }
  getSchedule() {
    console.log(this.enrollment);
    this.scheduleService.getSchedule(this.enrollment.code || '').subscribe();
  }
}
