import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { AnimationController, IonImg, IonicModule } from '@ionic/angular';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'ui-img',
  standalone: true,
  imports: [IonicModule],
  template: ` <ion-img [alt]="description" [src]="src" #img></ion-img> `,
  styles: ``,
})
export class UiImgComponent implements AfterViewInit {
  @ViewChild(IonImg, { read: ElementRef }) img: ElementRef<HTMLIonImgElement> | undefined;
  @Input() src: string = '';
  @Input() description: string = '';

  constructor(private animationCtrl: AnimationController) {}
  ngAfterViewInit(): void {
    this.toggleVisibility();
  }
  toggleVisibility() {
    if (this.img != undefined) {
      let animation = this.animationCtrl
        .create()
        .addElement(this.img.nativeElement)
        .duration(1500)
        .fromTo('transform', 'translateY(0)', 'translateY(50%)')
        .fromTo('opacity', '0', '1');
      animation.play();
    }
  }
}
