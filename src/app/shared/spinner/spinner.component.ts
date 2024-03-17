import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SpinnerService } from 'src/app/core/services/spinner.service';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="cssload-container" *ngIf="spinnerActive">
      <div class="cssload-speeding-wheel">
        <img src="./../../../assets/icon/logo_ucsm.png" alt="" />
      </div>
    </div>
  `,
  styles: ``,
})
export class SpinnerComponent {
  spinnerActive: boolean = true;
  constructor(public spinnerHandler: SpinnerService) {
    this.spinnerHandler.showSpinner.subscribe(this.showSpinner.bind(this));
  }

  showSpinner = (state: boolean): void => {
    this.spinnerActive = state;
  };
}
