import { Component, Input } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'grade-description',
  standalone: true,
  imports: [],
  template: `
    <div class="my-4">
      <div class=" text-lg text-center main-title-section font-bold">{{ main_title }}</div>
      <div class="flex justify-content-center">
        <div class="grid w-full">
          <div class="col">
            <div class="text-2xl font-bold text-center">{{ title_left }}</div>
            <div class="text-sm font-italic  text-center">{{ description_left }}</div>
          </div>
          <div class="col">
            <div class="text-2xl font-bold text-center">{{ title_right }}</div>
            <div class="text-sm font-italic  text-center">{{ description_right }}</div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class GradeDescriptionComponent {
  @Input() main_title = '';
  @Input() title_left = '';
  @Input() title_right = '';
  @Input() description_left = '';
  @Input() description_right = '';
}
