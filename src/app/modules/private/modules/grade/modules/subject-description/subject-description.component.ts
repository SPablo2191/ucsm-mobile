import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, map } from 'rxjs';
import { Phase } from 'src/app/project/enums/phase.enum';
import { PartialSubjectRegistration } from 'src/app/project/interfaces/subject.registration.interface';
import { SubjectService } from 'src/app/project/services/python/subject.service';

@Component({
  selector: 'app-subject-description',
  templateUrl: './subject-description.component.html',
  styleUrl: './subject-description.component.scss',
})
export class SubjectDescriptionComponent implements OnInit {
  subject!: PartialSubjectRegistration;
  showGrades = false;
  gradesPerPhase: gradePhase[] = [];
  protected subscriptions$: Subscription = new Subscription();
  constructor(
    private route: ActivatedRoute,
    private subjectService: SubjectService,
  ) {}

  ngOnInit(): void {
    this.getSubject();
  }
  ionViewDidLeave() {
    this.subscriptions$.unsubscribe();
  }
  getSubject() {
    let subjectId = this.route.snapshot.paramMap.get('id');
    if (subjectId)
      this.subscriptions$.add(
        this.subjectService
          .getSubject(subjectId)
          .pipe(
            map((response) => {
              this.subject = response;
              this.loadGrades(this.subject);
            }),
          )
          .subscribe(),
      );
  }
  ionViewWillEnter() {}
  changeSection() {
    this.showGrades = !this.showGrades;
  }
  loadGrades(subject: PartialSubjectRegistration) {
    if (this.gradesPerPhase.length !== 0) this.gradesPerPhase = [];
    subject.student_commissions?.[0]?.grades?.forEach((grade) => {
      if (grade.score && grade.phase) {
        this.gradesPerPhase.push({
          left_score: grade.score,
          phase: grade.phase,
          right_score: 0,
        });
      }
    });
    this.gradesPerPhase.forEach((grade, index) => {
      grade.right_score = subject.student_commissions?.[1]?.grades?.[index].score || 0;
    });
  }
}

export interface gradePhase {
  phase: Phase;
  left_score: number;
  right_score: number;
}
