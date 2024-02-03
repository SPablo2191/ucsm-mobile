/* eslint-disable @angular-eslint/component-selector */
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'ui-input',
  standalone: true,
  imports: [IonicModule],
  template: `
    <ion-input
      [label]="label"
      labelPlacement="floating"
      fill="outline"
      [helperText]="helperText"
      [errorText]="errorText"
    >
      <ion-icon slot="end" [name]="IconName" aria-hidden="true"></ion-icon>
    </ion-input>
  `,
  styles: `
  .icon {
  color: var(--ion-color-primary);
}
  `,
})
export class UiInputComponent {
  @Input() label: string = 'Email';
  @Input() helperText: string = 'Enter an email';
  @Input() errorText: string = 'Please enter a valid email';
  @Input() IconName: string = 'mail';
}
