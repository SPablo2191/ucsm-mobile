/* eslint-disable @angular-eslint/component-selector */
import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AnimationController, IonCard, IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'card-container',
  standalone: true,
  imports: [IonicModule, CommonModule],
  template: `
    <ion-card class="card min-h-screen m-0" #card>
      <ion-card-content>
        <ng-content></ng-content>
      </ion-card-content>
    </ion-card>
  `,
  styles: `
  .card{
	background: white;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.20);
	border-top-left-radius: 25px;
	border-top-right-radius: 25px;
	border-bottom-right-radius: 5px;
	border-bottom-left-radius: 5px;
  }
  `,
})
export class CardContainerComponent implements AfterViewInit {
  @ViewChild(IonCard, { read: ElementRef }) card: ElementRef<HTMLIonCardElement> | undefined;
  constructor(private animationCtrl: AnimationController) {}
  ngAfterViewInit(): void {
    this.toggleVisibility();
  }

  toggleVisibility() {
    if (this.card != undefined) {
      let animation = this.animationCtrl
        .create()
        .addElement(this.card.nativeElement)
        .duration(1000)
        .fromTo('transform', 'translateY(100%)', 'translateY(0)')
        .fromTo('opacity', '0', '1');
      animation.play();
    }
  }
}
