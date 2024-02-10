import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-ui-card',
  standalone: true,
  imports: [IonicModule, CommonModule],
  template: `
    <ion-card [class]="cardStyle" (click)="goToSite()">
      <ion-card-header
        [ngClass]="{
          'py-1 flex justify-content-between': iconName,
          'py-1': !iconName
        }"
      >
        <ion-card-title [class]="titleStyle">{{ title }}</ion-card-title>
        <ion-card-subtitle>{{ subTitle }}</ion-card-subtitle>
        <ion-icon [name]="iconName" size="large" class="my-1" *ngIf="iconName"></ion-icon>
      </ion-card-header>

      <ion-card-content>
        <p [class]="bodyStyle">{{ body }}</p>
        <ng-content></ng-content>
      </ion-card-content>
    </ion-card>
  `,
  styles: ``,
})
export class UiCardComponent {
  @Input() title!: string;
  @Input() subTitle!: string;
  @Input() body!: string;
  @Input() cardStyle!: string;
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
