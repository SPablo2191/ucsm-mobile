import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PartialStudent } from 'src/app/project/interfaces/student.interface';
import { AuthService } from 'src/app/project/services/php/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  student!: PartialStudent;
  protected subscriptions$: Subscription = new Subscription();
  goToProfile() {
    this.router.navigate(['/profile']);
  }
  showEvent = false;
  constructor(
    private router: Router,
    private authService: AuthService,
  ) {}
  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }
  ngOnInit(): void {
    let studentStoraged = localStorage.getItem('student');
    if (studentStoraged) {
      this.student = JSON.parse(studentStoraged);
    }
  }
  changeSection() {
    this.showEvent = !this.showEvent;
  }
  goToLogin() {
    this.router.navigate(['/login']);
  }
  logout() {
    this.subscriptions$.add(
      this.authService
        .logout(this.student.identification_document ? this.student.identification_document : '')
        .subscribe(),
    );
  }
}
