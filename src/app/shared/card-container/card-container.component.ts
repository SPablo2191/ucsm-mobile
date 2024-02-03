/* eslint-disable @angular-eslint/component-selector */
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'card-container',
  standalone: true,
  imports: [IonicModule],
  template: `
    <ion-card class="">
      <ion-card-content>
        <ng-content></ng-content>
      </ion-card-content>
    </ion-card>
  `,
  styles: ``,
})
export class CardContainerComponent {}
