import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, map } from 'rxjs';
import { PartialEnrollment } from 'src/app/project/interfaces/enrollment.interface';
import { PartialStudent } from 'src/app/project/interfaces/student.interface';
import { PartialSubjectRegistration } from 'src/app/project/interfaces/subject.registration.interface';
import { DebtService } from 'src/app/project/services/php/debt.service';
import { SubjectService } from 'src/app/project/services/php/subject.service';

@Component({
  selector: 'app-career-profile',
  templateUrl: './career-profile.component.html',
  styleUrl: './career-profile.component.css',
})
export class CareerProfileComponent implements OnInit, OnDestroy {
  protected student!: PartialStudent;
  protected enrollment!: PartialEnrollment;
  protected totalBalance: number = 0;
  protected linkBiblioteca = 'http://catalogo.ucsm.edu.pe/';
  protected linkAulaVirtual = 'https://www.ucsm.edu.pe/aula-virtual/';
  protected linkMatricula = 'https://webapp.ucsm.edu.pe/sm/Views/login.php';
  protected subjects: PartialSubjectRegistration[] = [];
  protected subscriptions$: Subscription = new Subscription();
  constructor(
    private subjectService: SubjectService,
    private debtService: DebtService,
  ) {}
  ngOnDestroy(): void {
    localStorage.removeItem('enrollmentSelected');
    sessionStorage.removeItem('enrollmentSelected');
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
    this.getSubjects();
    this.getTotalBalance();
  }
  getSubjects() {
    this.subscriptions$.add(
      this.subjectService
        .getSubjects(this.enrollment.code || '')
        .pipe(
          map((response) => {
            this.subjects = response;
          }),
        )
        .subscribe(),
    );
  }
  getTotalBalance() {
    this.subscriptions$.add(
      this.debtService
        .getTotalBalance(this.student.identification_document || '')
        .pipe(
          map((response) => {
            this.totalBalance = response.balance || 0;
          }),
        )
        .subscribe(),
    );
  }
}
