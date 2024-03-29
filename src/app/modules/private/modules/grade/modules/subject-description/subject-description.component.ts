import { Component, OnInit } from '@angular/core';
import { Phase } from 'src/app/project/enums/phase.enum';
import { PartialSubjectRegistration } from 'src/app/project/interfaces/subject.registration.interface';

@Component({
  selector: 'app-subject-description',
  templateUrl: './subject-description.component.html',
  styleUrl: './subject-description.component.scss',
})
export class SubjectDescriptionComponent implements OnInit {
  subject!: PartialSubjectRegistration;
  showGrades = false;
  grades: gradePhase[] = [];

  ngOnInit(): void {
    let subjectSelected = localStorage.getItem('subjectSelected');
    if (subjectSelected) {
      this.subject = JSON.parse(subjectSelected);
    }
    console.log(subjectSelected);
  }
  ionViewWillEnter() {
    let subjectSelected = JSON.parse(localStorage.getItem('subjectSelected') || '{}');
    if (this.subject.subject?.name === subjectSelected.subject?.name) {
      return;
    }
    this.subject = subjectSelected;
    this.subject.student_commissions?.[0]?.grades?.forEach((grade) => {
      this.grades.push({
        left_score: grade.score || 0,
        phase: grade.phase || Phase.FIRST,
        right_score: 0,
      });
    });
    this.grades.forEach((grade, index) => {
      grade.right_score = this.subject.student_commissions?.[1]?.grades?.[index].score || 0;
    });
  }
  changeSection() {
    this.showGrades = !this.showGrades;
  }
}

export interface gradePhase {
  phase: Phase;
  left_score: number;
  right_score: number;
}
