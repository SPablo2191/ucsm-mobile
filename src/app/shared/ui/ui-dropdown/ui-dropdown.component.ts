import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'ui-dropdown',
  standalone: true,
  imports: [IonicModule],
  template: `
    <ion-select
      [interfaceOptions]="{ size: 'cover' }"
      interface="popover"
      placeholder="Seleccione el semestre"
      detail="false"
    >
      <ion-select-option value="apple">Apple</ion-select-option>
      <ion-select-option value="banana">Banana</ion-select-option>
      <ion-select-option value="orange">Orange</ion-select-option>
    </ion-select>
  `,
  styles: ``,
})
export class UiDropdownComponent {}
