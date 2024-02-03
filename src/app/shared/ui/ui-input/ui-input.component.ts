/* eslint-disable @angular-eslint/component-selector */
import { Component, Input } from '@angular/core';
import { IonInput, IonicModule } from '@ionic/angular';

@Component({
  selector: 'ui-input',
  standalone: true,
  imports: [IonicModule],
  template: `
    <ion-input
      labelPlacement="floating"
      [counter]="true"
      maxlength="100"
      fill="outline"
      helperText="Enter an email"
      errorText="Please enter a valid email"
    >
      <ion-icon slot="end" name="lock-closed" aria-hidden="true"></ion-icon>
    </ion-input>
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
export class UiInputComponent extends IonInput {}
