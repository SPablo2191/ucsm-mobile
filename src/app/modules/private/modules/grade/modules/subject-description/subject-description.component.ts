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
  gradesPerPhase: gradePhase[] = [];

  ngOnInit(): void {
    let subjectSelected = localStorage.getItem('subjectSelected');
    if (subjectSelected) {
      this.subject = JSON.parse(subjectSelected);
    }
    this.loadGrades();
  }
  ionViewWillEnter() {
    let subjectSelected = JSON.parse(localStorage.getItem('subjectSelected') || '{}');
    if (this.subject.subject?.name === subjectSelected.subject?.name) {
      return;
    }
    this.subject = subjectSelected;
    this.loadGrades();
  }
  changeSection() {
    this.showGrades = !this.showGrades;
  }
  loadGrades() {
    console.log(this.subject.student_commissions?.[0]?.grades);
    if (this.gradesPerPhase.length !== 0) this.gradesPerPhase = [];
    this.subject.student_commissions?.[0]?.grades?.forEach((grade) => {
      if (grade.score && grade.phase) {
        this.gradesPerPhase.push({
          left_score: grade.score,
          phase: grade.phase,
          right_score: 0,
        });
      }
    });
    console.log(this.gradesPerPhase);
    this.gradesPerPhase.forEach((grade, index) => {
      grade.right_score = this.subject.student_commissions?.[1]?.grades?.[index].score || 0;
    });
  }
}

export interface gradePhase {
  phase: Phase;
  left_score: number;
  right_score: number;
}
