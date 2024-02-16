import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'person-item',
  standalone: true,
  imports: [IonicModule],
  template: `
    <div class="flex justify-content-center">
      <ion-img [src]="image_url" alt="person" [style]="style"></ion-img>
    </div>
    <div class="text-center font-bold">{{ title }}</div>
    <div class="text-center text-xs font-italic">{{ subtitle }}</div>
  `,
  styles: `
 ion-img{
	width: 49px; height: 43px;
 }
 ion-img::part(image) {
  border-radius: 10px;
  object-fit: cover;
}
  `,
})
export class PersonItemComponent {
  @Input() image_url: string = '';
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() style: string = 'width: 49px; height: 43px;';
}
