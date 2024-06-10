import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, map } from 'rxjs';
import { CareerStatistics } from 'src/app/project/interfaces/subject.registration.interface';
import { SubjectService } from 'src/app/project/services/python/subject.service';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrl: './grade.component.css',
})
export class GradeComponent {
  careerStatistics: CareerStatistics = {
    approved_subjects: 0,
    remaining_subjects: 0,
  } as CareerStatistics;
  data: number[] = [];
  protected subscriptions$: Subscription = new Subscription();
  protected chartStyle = {
    cutout: '50%',
    rotation: -90,
    circumference: 180,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        formatter: (value: any, ctx: any) => {
          const datapoints = ctx.chart.data.datasets[0].data;
          const total = datapoints.reduce((total: any, datapoint: any) => total + datapoint, 0);
          const percentage = (value / total) * 100;
          return percentage.toFixed(2) + '%';
        },
        color: '#fff',
        font: {
          size: '21',
        },
      },
    },
  };
  constructor(private subjectService: SubjectService) {}
  ionViewWillEnter() {
    this.getStatistics();
  }
  ionViewDidLeave() {
    this.subscriptions$.unsubscribe();
  }
  getStatistics() {
    let enrollmentId = localStorage.getItem('enrollment_id');
    if (enrollmentId)
      this.subscriptions$.add(
        this.subjectService
          .getStatistics(enrollmentId)
          .pipe(
            map((response) => {
              console.log(response);
              this.data.push(response.approved_subjects);
              this.data.push(response.remaining_subjects);
              this.careerStatistics = response;
            }),
          )
          .subscribe(),
      );
  }
}
