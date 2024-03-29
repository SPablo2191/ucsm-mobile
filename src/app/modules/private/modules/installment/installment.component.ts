import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, map } from 'rxjs';
import { PartialDebt } from 'src/app/project/interfaces/debt.interface';
import { PartialStudent } from 'src/app/project/interfaces/student.interface';
import { DebtService } from 'src/app/project/services/php/debt.service';

@Component({
  selector: 'app-installment',
  templateUrl: './installment.component.html',
  styleUrl: './installment.component.css',
})
export class InstallmentComponent implements OnInit {
  debt: PartialDebt = {};
  protected student!: PartialStudent;
  protected subscriptions$: Subscription = new Subscription();
  constructor(private debtService: DebtService) {}
  ionViewDidLeave(): void {
    this.subscriptions$.unsubscribe();
  }
  ngOnInit(): void {
    let studentStoraged = localStorage.getItem('student');
    if (studentStoraged) {
      this.student = JSON.parse(studentStoraged);
    }
    this.getInstallments();
  }
  getInstallments() {
    this.subscriptions$.add(
      this.debtService
        .getDebt(this.student.identification_document || '')
        .pipe(
          map((debt) => {
            this.debt = debt;
          }),
        )
        .subscribe(),
    );
  }
}
