import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, map } from 'rxjs';
import { Enrollment, PartialEnrollment } from 'src/app/project/interfaces/enrollment.interface';
import { PartialStudent } from 'src/app/project/interfaces/student.interface';
import { AuthService } from 'src/app/project/services/python/auth.service';
import { EnrollmentService } from 'src/app/project/services/python/enrollment.service';
import { ProfileService } from 'src/app/project/services/python/profile.service';

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
    private profileService: ProfileService,
    private enrollmentService: EnrollmentService,
  ) {}
  ngOnInit(): void {
    this.getProfile();
    this.getEnrollment();
  }
  ionViewDidLeave() {
    this.subscriptions$.unsubscribe();
  }
  ionViewWillEnter() {
    this.getProfile();
    this.getEnrollment();
  }
  getProfile() {
    this.subscriptions$.add(
      this.profileService
        .getProfile()
        .pipe(
          map((student) => {
            this.student = student;
          }),
        )
        .subscribe(),
    );
  }
  getEnrollment() {
    this.subscriptions$.add(
      this.enrollmentService
        .getEnrollments()
        .pipe(
          map((enrollments) => {
            this.enrollments = enrollments;
          }),
        )
        .subscribe(),
    );
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
