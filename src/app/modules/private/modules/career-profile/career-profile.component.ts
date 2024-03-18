import { Component, OnInit } from '@angular/core';
import { PartialEnrollment } from 'src/app/project/interfaces/enrollment.interface';
import { PartialStudent } from 'src/app/project/interfaces/student.interface';

@Component({
  selector: 'app-career-profile',
  templateUrl: './career-profile.component.html',
  styleUrl: './career-profile.component.css',
})
export class CareerProfileComponent implements OnInit {
  student!: PartialStudent;
  enrollment!: PartialEnrollment;
  protected totalBalance: number = 0;
  protected linkBiblioteca = 'http://catalogo.ucsm.edu.pe/';
  protected linkAulaVirtual = 'https://www.ucsm.edu.pe/aula-virtual/';
  protected linkMatricula = 'https://webapp.ucsm.edu.pe/sm/Views/login.php';
  ngOnInit(): void {
    let studentStoraged = localStorage.getItem('student');
    let enrollmentSelectedStoraged = localStorage.getItem('enrollmentSelected');
    if (studentStoraged) {
      this.student = JSON.parse(studentStoraged);
    }
    if (enrollmentSelectedStoraged) {
      this.enrollment = JSON.parse(enrollmentSelectedStoraged);
    }
  }
}
