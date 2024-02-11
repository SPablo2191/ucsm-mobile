import { CommonModule } from '@angular/common';
import { Component, Input, LOCALE_ID } from '@angular/core';
import LocaleEsPe from '@angular/common/locales/es-PE';
import { registerLocaleData } from '@angular/common';
registerLocaleData(LocaleEsPe);
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'installment-card',
  standalone: true,
  imports: [CommonModule],
  providers: [{ provide: LOCALE_ID, useValue: 'es-PE' }],
  template: `
    <div class="card ion-margin">
      <div class="grid">
        <div class="col-7">
          <div class="info">Fecha de vencimiento: 23/10/24</div>
          <div class="info">Código: 04</div>
          <div class="header">
            <div class="info">Pensión: {{ pension | currency: 'PEN' : 'symbol' : '' }}</div>
            <div class="info">Mora: {{ defaultedLoan | currency: 'PEN' : 'symbol' : '' }}</div>
          </div>
        </div>
        <div class="col-5">
          <div class="flex flex-column">
            <div class=" flex justify-content-center">
              <span class="title">{{ total | currency: 'PEN' : 'symbol' : '' }}</span>
            </div>
            <div class="info flex justify-content-center">Deuda</div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: `
     .card {
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.20);
      border-radius: 5px;
      display: flex;
	  color:  #515a5a;
      flex-direction: column;
      justify-content: space-between;
      padding: 8px;
    }

    .header {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }

    .title, .info {

      font-family: Roboto;
      word-wrap: break-word;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
    }

    .info {
      height: 14px;
      font-size: 10px;
      font-weight: 400;
    }

    .selected-card {
      background-color: #05BE6A; /* Color de fondo verde */
    }

    .selected-card .title, .selected-card .info {
      color: white; /* Color de texto blanco */
    }

    .selected-card .link {
      color: white; /* Color de texto blanco */
    }

  `,
})
export class InstallmentCardComponent {
  @Input() pension: number = 200;
  @Input() defaultedLoan: number = 0;
  @Input() total: number = 0;
}
