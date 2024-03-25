import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
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
  constructor(private debtService: DebtService) {}
  ngOnInit(): void {
    let studentStoraged = localStorage.getItem('student');
    if (studentStoraged) {
      this.student = JSON.parse(studentStoraged);
    }
    this.getInstallments();
  }
  getInstallments() {
    console.log(this.student.identification_document);
    this.debtService
      .getDebt(this.student.identification_document || '')
      .pipe(
        map((debt) => {
          this.debt = debt;
        }),
      )
      .subscribe();
  }
}
