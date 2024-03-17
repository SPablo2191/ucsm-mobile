import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'ui-password',
  standalone: true,
  imports: [CommonModule, IonicModule, ReactiveFormsModule],
  template: `
    <div [formGroup]="group">
      <ion-input
        label="Contraseña"
        labelPlacement="floating"
        [type]="flag ? 'password' : 'text'"
        fill="outline"
        [formControlName]="name"
        helperText="Ingrese su contraseña"
        errorText="Ingrese una contraseña válida"
      >
        <ion-icon
          slot="end"
          name="eye-outline"
          aria-hidden="true"
          *ngIf="flag; else password"
          (click)="showPassword()"
        />
        <ng-template #password>
          <ion-icon slot="end" name="eye-off-outline" aria-hidden="true" (click)="showPassword()" />
        </ng-template>
      </ion-input>
    </div>
  `,
  styles: ``,
})
export class UiPasswordComponent {
  flag: boolean = true;
  @Input() group!: FormGroup;
  @Input() name!: string;
  constructor() {}
  public showPassword() {
    console.log(`showPassword => ${this.flag}`);
    this.flag = !this.flag;
  }
}
