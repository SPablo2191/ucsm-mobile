import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, map } from 'rxjs';
import { Enrollment, PartialEnrollment } from 'src/app/project/interfaces/enrollment.interface';
import { PartialStudent } from 'src/app/project/interfaces/student.interface';
import { AuthService } from 'src/app/project/services/php/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  student!: PartialStudent;
  enrollments: PartialEnrollment[] = [];
  protected subscriptions$: Subscription = new Subscription();
  showEvent = false;
  constructor(
    private router: Router,
    private authService: AuthService,
  ) {}
  ionViewDidLeave() {
    this.subscriptions$.unsubscribe();
  }
  ionViewWillEnter() {
    let studentStoraged = JSON.parse(localStorage.getItem('student') || '{}');
    if (this.student.identification_document === studentStoraged.identification_document) {
      return;
    }
    this.student = studentStoraged;
  }
  ngOnInit(): void {
    let studentStoraged = localStorage.getItem('student');
    let enrollmentsStoraged = localStorage.getItem('enrollments');
    if (studentStoraged) {
      this.student = JSON.parse(studentStoraged);
    }
    if (enrollmentsStoraged) {
      this.enrollments = JSON.parse(enrollmentsStoraged);
    }
  }
  goToProfile() {
    this.router.navigate(['/profile']);
  }
  changeSection() {
    this.showEvent = !this.showEvent;
  }
  goToLogin() {
    this.router.navigate(['/login']);
  }
  goToEnrollment(enrollment: PartialEnrollment) {
    localStorage.setItem('enrollmentSelected', JSON.stringify(enrollment));
    this.router.navigate(['/private/career/career-profile']);
  }
  logout() {
    this.subscriptions$.add(
      this.authService
        .logout(this.student.identification_document ? this.student.identification_document : '')
        .subscribe(),
    );
  }
}
