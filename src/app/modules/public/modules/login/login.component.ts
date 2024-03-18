import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { Auth } from 'src/app/core/interfaces/auth.interface';
import { ApiRequest } from 'src/app/core/interfaces/request.interface';
import { PartialStudent } from 'src/app/project/interfaces/student.interface';
import { AuthService } from 'src/app/project/services/php/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  protected form!: FormGroup;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
  ) {}
  ngOnInit(): void {
    this.buildForm();
  }
  private buildForm() {
    this.form = this.fb.group({
      identification_document: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }
  login() {
    let student: PartialStudent = {
      identification_document: this.form.get('identification_document')?.value,
      password: this.form.get('password')?.value,
    };
    this.authService
      .login(student)
      .pipe(
        map((student) => {
          this.router.navigate(['/private/home']);
        }),
      )
      .subscribe();
  }
}
