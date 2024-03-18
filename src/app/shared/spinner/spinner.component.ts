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
        <img src="/assets/icon/logo_ucsm.png" alt="" />
      </div>
    </div>
  `,
  styles: `
  .cssload-container {
    position: fixed;
    width: 100%;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.7);
    z-index: 9999;
  }

  .cssload-speeding-wheel {
    content: "";
    display: flex;

    position: absolute;
    /* left: 48%;
    top: 40%; */
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
    /* margin: 0 auto;
    border: 4px solid rgb(0, 0, 0);
    border-radius: 50%;
    border-left-color: transparent;
    border-right-color: transparent; */
    /* background-image: url('./../../../assets/icon/logo_ucsm.png'); */
    /* animation: cssload-spin 1.5s infinite linear; */
    /* -o-animation: cssload-spin 500ms infinite linear;
    -ms-animation: cssload-spin 500ms infinite linear;
    -webkit-animation: cssload-spin 500ms infinite linear;
    -moz-animation: cssload-spin 500ms infinite linear; */
  }

  .cssload-speeding-wheel img{
    width: 63px;
    height: 63px;
    animation: cssload-spin 1.5s infinite linear;
    -o-animation: cssload-spin 1.5s infinite linear;
    -ms-animation: cssload-spin 1.5s infinite linear;
    -webkit-animation: cssload-spin 1.5s infinite linear;
    -moz-animation: cssload-spin 1.5s infinite linear;
  }

  @keyframes cssload-spin {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.3);
    }
    100% {
      transform: scale(1);
    }
  }

  @-o-keyframes cssload-spin {

    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.3);
    }
    100% {
      transform: scale(1);
    }
  }

  @-ms-keyframes cssload-spin {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.3);
    }
    100% {
      transform: scale(1);
    }
  }

  @-webkit-keyframes cssload-spin {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.3);
    }
    100% {
      transform: scale(1);
    }
  }

  @-moz-keyframes cssload-spin {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.3);
    }
    100% {
      transform: scale(1);
    }
  }`,
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
