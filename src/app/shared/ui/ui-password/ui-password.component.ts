import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'ui-password',
  standalone: true,
  imports: [IonicModule],
  template: `
    <ion-input
      label="Contraseña"
      labelPlacement="floating"
      type="{{ flag ? 'password' : 'text' }}"
      fill="outline"
      helperText="Ingrese su contraseña"
      errorText="Ingrese una contraseña válida"
    >
      <ion-icon slot="end" name="eye-outline" aria-hidden="true" *ngIf="flag" />
      <ion-icon slot="end" name="eye-off-outline" aria-hidden="true" *ngIf="!flag" />
    </ion-input>
  `,
  styles: ``,
})
export class UiPasswordComponent {
  flag: boolean = true;
  constructor() {}
  public showPassword() {
    this.flag = !this.flag;
  }
}
