import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'classroom-description',
  standalone: true,
  imports: [CommonModule, IonicModule],
  template: `
    <div class=" text-xl text-center main-title-section font-bold">{{ main_title }}</div>
    <div class="flex justify-content-center">
      <div class="grid w-full">
        <div class="col">
          <div class="text-xl font-bold text-center">{{ title_left }}</div>
          <div class="text-lg font-bold text-center">{{ description_left }}</div>
          <div class="col" *ngIf="left_start_hour">
            <div class="flex justify-content-center align-items-center text-xs">
              <ion-icon name="time-outline" style="font-size: 15px; margin-right: 4px;"></ion-icon>
              Inicio: {{ left_start_hour }}
            </div>
          </div>
          <div class="col" *ngIf="left_end_hour">
            <div class="flex justify-content-center align-items-center text-xs">
              <ion-icon name="time-outline" style="font-size: 15px; margin-right: 4px;"></ion-icon>
              Fin: {{ left_end_hour }}
            </div>
          </div>
        </div>
        <div class="col">
          <div class="text-xl font-bold text-center">{{ title_right }}</div>
          <div class="text-lg font-bold text-center">{{ description_right }}</div>
          <div class="col" *ngIf="right_start_hour">
            <div class="flex justify-content-center align-items-center text-xs">
              <ion-icon name="time-outline" style="font-size: 15px; margin-right: 4px;"></ion-icon>
              Inicio: {{ right_start_hour }}
            </div>
          </div>
          <div class="col" *ngIf="right_end_hour">
            <div class="flex justify-content-center align-items-center text-xs">
              <ion-icon name="time-outline" style="font-size: 15px; margin-right: 4px;"></ion-icon>
              Fin: {{ right_end_hour }}
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: `
 .main-title-section {
  color: #099957;
}
  `,
})
export class ClassroomDescriptionComponent {
  @Input() main_title = '';
  @Input() title_left = '';
  @Input() title_right = '';
  @Input() description_left = '';
  @Input() description_right = '';
  @Input() left_start_hour!: string;
  @Input() right_start_hour!: string;
  @Input() right_end_hour!: string;
  @Input() left_end_hour!: string;
}
