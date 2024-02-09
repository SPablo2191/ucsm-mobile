import { Component } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'tab-card',
  standalone: true,
  imports: [],
  template: `
    <div class="card">
      <div class="flex justify-content-between ml-2">
        <h1 class="text-white font-bold text-4xl text-left">
          ¡Hola, <br />
          Pablo!
        </h1>
        <div class="flex justify-content-end">
          <img
            src="/assets/images/career-profile.png"
            alt=""
            style="width: 200px; height: 100px; object-fit: cover;object-position: top;"
          />
        </div>
      </div>
      <div class="flex my-0 p-0 justify-content-start mx-2">
        <p class="text-lg font-bold">Ingenieria de sistemas</p>
      </div>
    </div>
  `,
  styles: `
  .card{
	  background: linear-gradient(180deg, #05BE6A 0%, #099957 100%); box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); border-radius: 5px;
  }`,
})
export class TabCardComponent {}
