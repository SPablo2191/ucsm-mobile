import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PartialSemester } from 'src/app/project/interfaces/semester.interface';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'ui-dropdown',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  template: `
    <ion-select
      placeholder="Seleccione el semestre"
      interface="popover"
      (ionChange)="change()"
      text-wrap
      detail="true"
      [(ngModel)]="selected"
    >
      <ng-container *ngFor="let item of items">
        <ion-select-option [value]="item.id">{{ item.name }}</ion-select-option>
      </ng-container>
    </ion-select>
  `,
  styles: `
  `,
})
export class UiDropdownComponent {
  @Input() items!: PartialSemester[];
  @Input() selected!: PartialSemester;
  @Output() changed = new EventEmitter<boolean>();
  change() {
    this.changed.emit(true);
  }
}
