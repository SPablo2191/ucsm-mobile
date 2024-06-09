import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { PartialDebt } from 'src/app/project/interfaces/debt.interface';
import { DebtService } from 'src/app/project/services/python/debt.service';

@Component({
  selector: 'app-installment',
  templateUrl: './installment.component.html',
  styleUrl: './installment.component.css',
})
export class InstallmentComponent implements OnInit {
  debt$!: Observable<PartialDebt>;
  protected subscriptions$: Subscription = new Subscription();
  constructor(private debtService: DebtService) {}
  ionViewDidLeave(): void {
    this.subscriptions$.unsubscribe();
  }
  ngOnInit(): void {
    this.getInstallments();
  }
  getInstallments() {
    let enrollmentId = localStorage.getItem('enrollment_id');
    if (enrollmentId) this.debt$ = this.debtService.getDebt(enrollmentId);
  }
}
