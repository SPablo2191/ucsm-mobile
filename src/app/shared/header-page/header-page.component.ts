import { Component, Input } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'header-page',
  standalone: true,
  imports: [],
  template: `
    <div class="flex justify-content-between ml-2">
      <div class="">
        <h1 class="title font-bold text-4xl text-left">{{ title }}</h1>
        <h2 class="sub-title">{{ subtitle }}</h2>
      </div>
      <div class="flex justify-content-end">
        <img [src]="imageurl" alt="" style=" object-fit: cover;object-position: top;" />
      </div>
    </div>
  `,
  styles: `
  .title{
	color : var(--ion-color-ucsm);
	word-wrap: break-word;
  }
  .sub-title{
	color : #575756;
	font-size : 17px;
	word-wrap: break-word;

  }`,
})
export class HeaderPageComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() imageurl: string = '';
}
