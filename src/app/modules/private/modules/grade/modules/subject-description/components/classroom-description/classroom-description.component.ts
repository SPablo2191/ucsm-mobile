import { Component, Input } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'classroom-description',
  standalone: true,
  imports: [],
  template: `
    <div class=" text-xl text-center main-title-section font-bold">{{ main_title }}</div>
    <div class="flex justify-content-center">
      <div class="grid w-full">
        <div class="col">
          <div class="text-xl font-bold text-center">{{ title_left }}</div>
          <div class="text-lg font-bold text-center">{{ description_left }}</div>
          <div class="col">
            <div></div>
          </div>
        </div>
        <div class="col">
          <div class="text-xl font-bold text-center">{{ title_right }}</div>
          <div class="text-lg font-bold text-center">{{ description_right }}</div>
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
}
