import { Component, OnInit } from '@angular/core';
import { PartialStudent } from 'src/app/project/interfaces/student.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  student!: PartialStudent;
  ngOnInit(): void {
    let studentStoraged = localStorage.getItem('student');
    let enrollmentSelectedStoraged = localStorage.getItem('enrollmentSelected');
    if (studentStoraged) {
      this.student = JSON.parse(studentStoraged);
    }
  }
}
