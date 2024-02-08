import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'event-card',
  standalone: true,
  imports: [CommonModule, IonicModule],
  template: `
    <ion-card class="card-background" (click)="goToSite()" [style.backgroundImage]="'url(' + imageUrl + ')'">
      <ion-card-header
        [ngClass]="{
          'py-1 flex justify-content-between': iconName,
          'py-1': !iconName
        }"
      >
        <ion-card-title class="text-white font-italic text-right text-xs mt-2 py-2">Ver Novedad ></ion-card-title>
        <ion-card-subtitle class="text-white font-bold text-left text-2xl">{{ title }}</ion-card-subtitle>
        <ion-icon [name]="iconName" size="large" class="my-1" *ngIf="iconName"></ion-icon>
      </ion-card-header>

      <ion-card-content>
        <p class="text-white text-left font-italic text-xs">{{ body }}</p>
        <ng-content></ng-content>
      </ion-card-content>
    </ion-card>
  `,
  styles: `
  .card-background{
	object-fit: cover;
	transition: background-color 0.3s;
  }
  .card-background::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(9, 153, 87, 0.5);
  transition: background-color 0.3s; /* Agrega una transición suave */
}

.card-background:hover::before {
  background-color: rgba(9, 153, 87, 0.8); /* Cambia el color al hacer hover */
}`,
})
export class EventCardComponent {
  @Input() title!: string;
  @Input() body!: string;
  @Input() iconName!: string;
  @Input() path!: string;
  @Input() imageUrl!: string;

  goToSite() {
    console.log('goToSite');
  }
}
