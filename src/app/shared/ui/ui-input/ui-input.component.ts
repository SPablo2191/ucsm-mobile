/* eslint-disable @angular-eslint/component-selector */
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'ui-input',
  standalone: true,
  imports: [IonicModule],
  template: `
    <ion-item class="ion-margin-top" shape="round" ref="dniInput">
      <ion-label position="floating" color="success">DNI</ion-label>
      <ion-input autofocus="true"></ion-input>
      <ion-icon class="icon" slot="end" name="person-outline"></ion-icon>
      <ion-note slot="error">DNI invalido</ion-note>
    </ion-item>
  `,
  styles: `
  .icon {
  width: 18px;
  height: 18px;
  padding-top: 15px;
  color: var(--ion-color-primary);
}
  `,
})
export class UiInputComponent {}
