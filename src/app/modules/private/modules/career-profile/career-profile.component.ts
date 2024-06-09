import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, map } from 'rxjs';
import { PartialDebt } from 'src/app/project/interfaces/debt.interface';
import { PartialEnrollment } from 'src/app/project/interfaces/enrollment.interface';
import { PartialStudent } from 'src/app/project/interfaces/student.interface';
import { PartialSubjectRegistration } from 'src/app/project/interfaces/subject.registration.interface';
import { DebtService } from 'src/app/project/services/python/debt.service';
import { EnrollmentService } from 'src/app/project/services/python/enrollment.service';
import { SubjectService } from 'src/app/project/services/python/subject.service';

@Component({
  selector: 'app-career-profile',
  templateUrl: './career-profile.component.html',
  styleUrl: './career-profile.component.css',
})
export class CareerProfileComponent implements OnInit {
  protected enrollment!: PartialEnrollment;
  enrollment$!: Observable<PartialEnrollment>;
  subjects$!: Observable<PartialSubjectRegistration[]>;
  debt$!: Observable<PartialDebt>;
  protected linkBiblioteca = 'http://catalogo.ucsm.edu.pe/';
  protected linkAulaVirtual = 'https://www.ucsm.edu.pe/aula-virtual/';
  protected linkMatricula = 'https://webapp.ucsm.edu.pe/sm/Views/login.php';
  protected subjects: PartialSubjectRegistration[] = [];
  protected subscriptions$: Subscription = new Subscription();
  constructor(
    private subjectService: SubjectService,
    private debtService: DebtService,
    private enrollmentService: EnrollmentService,
  ) {}
  ionViewDidLeave() {
    this.subscriptions$.unsubscribe();
  }
  ionViewWillEnter() {}
  ngOnInit(): void {
    this.getEnrollment();
    this.getSubjects();
    this.getTotalBalance();
  }
  getEnrollment() {
    let enrollmentId = localStorage.getItem('enrollment_id');
    if (enrollmentId) this.enrollment$ = this.enrollmentService.getEnrollment(enrollmentId);
  }
  getSubjects() {
    let enrollmentId = localStorage.getItem('enrollment_id');
    if (enrollmentId) this.subjects$ = this.subjectService.getSubjects(enrollmentId);
  }
  getTotalBalance() {
    let enrollmentId = localStorage.getItem('enrollment_id');
    if (enrollmentId) this.debt$ = this.debtService.getDebt(enrollmentId);
  }
}
