import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'career-card',
  standalone: true,
  imports: [CommonModule, IonicModule],
  template: `
    <ion-card class="bg-white" (click)="goToSite()">
      <ion-card-header
        [ngClass]="{
          'py-1 flex justify-content-between': iconName,
          'py-1': !iconName
        }"
      >
        <ion-card-title class="text-gray-800 font-bold text-left text-xl mt-2 py-2">{{ title }}</ion-card-title>
        <ion-card-subtitle class="font-bold">{{ subTitle }}</ion-card-subtitle>
        <ion-icon [name]="iconName" size="large" class="my-1" *ngIf="iconName"></ion-icon>
      </ion-card-header>

      <ion-card-content>
        <p class="text-right font-italic">{{ body }}</p>
        <ng-content></ng-content>
      </ion-card-content>
    </ion-card>
  `,
  styles: ``,
})
export class CareerCardComponent {
  @Input() title!: string;
  @Input() subTitle!: string;
  @Input() body!: string;
  @Input() titleStyle!: string;
  @Input() iconName!: string;
  @Input() path!: string;
  @Input() bodyStyle!: string;
  constructor(private router: Router) {}

  goToSite() {
    if (this.path) {
      this.router.navigate([this.path]);
    }
  }
}
