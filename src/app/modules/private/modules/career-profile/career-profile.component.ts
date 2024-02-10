import { Component } from '@angular/core';

@Component({
  selector: 'app-career-profile',
  templateUrl: './career-profile.component.html',
  styleUrl: './career-profile.component.css',
})
export class CareerProfileComponent {
  protected totalBalance: number = 0;
  protected linkBiblioteca = 'http://catalogo.ucsm.edu.pe/';
  protected linkAulaVirtual = 'https://www.ucsm.edu.pe/aula-virtual/';
  protected linkMatricula = 'https://webapp.ucsm.edu.pe/sm/Views/login.php';
}
