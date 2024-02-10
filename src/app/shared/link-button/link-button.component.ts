import { Component, Input } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'link-button',
  standalone: true,
  imports: [],
  template: `<div class="card" (click)="goToSite()">
    <div class="flex justify-content-center align-items-center">
      <img [src]="imageSource" class="card-img-top" alt="Card image" />
    </div>
    <div class="card-body">
      <p class="card-text text-sm">{{ label }}</p>
    </div>
  </div> `,
  styles: `
   .card {
        width: 6rem; /* Ajustar el ancho del card */
        cursor: pointer;
        border: none;
        background-color: white;
        box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.1);
        border-radius: 0.5rem;
        transition: transform 0.2s;
      }

      .card:hover {
        transform: translateY(-3px); /* Efecto de levantamiento al pasar el mouse */
      }

      .card-img-top {
        height: 3rem; /* Ajustar la altura de la imagen */
        object-fit: cover;
      }

      .card-body {
        padding: 0.5rem; /* Ajustar el espacio interno */
        text-align: center;
      }

      .card-text {
        color: var(--ion-color-ucsm-shade);
        margin: 0; /* Eliminar el margen del texto */
      }
`,
})
export class LinkButtonComponent {
  @Input() label!: string;
  @Input() imageSource!: string;
  @Input() pathSite!: string;
  public goToSite(): void {
    if (this.pathSite) {
      window.location.href = this.pathSite;
    }
  }
}
