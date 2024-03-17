/* eslint-disable @angular-eslint/component-selector */
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'ui-input',
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule],
  template: `
    <div [formGroup]="group">
      <ion-input
        [label]="label"
        labelPlacement="floating"
        fill="outline"
        [formControlName]="name"
        [helperText]="helperText"
        [errorText]="errorText"
      >
        <ion-icon slot="end" [name]="IconName" aria-hidden="true"></ion-icon>
      </ion-input>
    </div>
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
  @Input() group!: FormGroup;
  @Input() name!: string;
}
