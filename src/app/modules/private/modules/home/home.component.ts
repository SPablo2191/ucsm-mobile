import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable, Subscription, map } from 'rxjs';
import { Enrollment, PartialEnrollment } from 'src/app/project/interfaces/enrollment.interface';
import { PartialEvent } from 'src/app/project/interfaces/event.interface';
import { PartialStudent } from 'src/app/project/interfaces/student.interface';
import { AuthService } from 'src/app/project/services/python/auth.service';
import { EnrollmentService } from 'src/app/project/services/python/enrollment.service';
import { EventService } from 'src/app/project/services/python/event.service';
import { ProfileService } from 'src/app/project/services/python/profile.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  student$!: Observable<PartialStudent>;
  enrollments$!: Observable<PartialEnrollment[]>;
  events$!: Observable<PartialEvent[]>;
  protected subscriptions$: Subscription = new Subscription();
  showEvent = false;
  constructor(
    private router: Router,
    private authService: AuthService,
    private profileService: ProfileService,
    private enrollmentService: EnrollmentService,
    private navController: NavController,
    private eventService: EventService,
  ) {}
  ngOnInit(): void {
    this.getProfile();
    this.getEnrollment();
    this.getEvents();
  }
  ionViewDidLeave() {
    this.subscriptions$.unsubscribe();
  }
  getProfile() {
    this.student$ = this.profileService.getProfile();
  }
  getEnrollment() {
    this.enrollments$ = this.enrollmentService.getEnrollments();
  }
  getEvents() {
    this.events$ = this.eventService.getEvents();
  }
  goToProfile() {
    this.router.navigate(['/profile']);
  }
  changeSection() {
    this.showEvent = !this.showEvent;
  }
  goToEnrollment(enrollment: PartialEnrollment) {
    localStorage.setItem('enrollmentSelected', JSON.stringify(enrollment));
    this.router.navigate(['/private/career/career-profile']);
  }
  goToEvent(eventId: string) {
    this.router.navigate([
      '/private/event',
      {
        id: eventId,
      },
    ]);
  }
  logout() {
    this.subscriptions$.add(
      this.authService
        .logout(localStorage.getItem('identification_document') || '')
        .pipe(
          map((response) => {
            this.navController.pop();
            this.navController.navigateBack('/login');
          }),
        )
        .subscribe(),
    );
  }
}
