/* eslint-disable @angular-eslint/component-selector */
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'card-container',
  standalone: true,
  imports: [IonicModule],
  template: `
    <ion-card class="card min-h-screen m-0">
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
export class CardContainerComponent {}
