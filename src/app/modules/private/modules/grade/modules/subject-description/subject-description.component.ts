import { Component } from '@angular/core';

@Component({
  selector: 'app-subject-description',
  templateUrl: './subject-description.component.html',
  styleUrl: './subject-description.component.scss',
})
export class SubjectDescriptionComponent {
  title: String = 'Introduccion a la programación';
  showGrades = false;
  changeSection() {
    this.showGrades = !this.showGrades;
  }
}
