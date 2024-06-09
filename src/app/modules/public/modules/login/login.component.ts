import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription, map } from 'rxjs';
import { PartialStudent } from 'src/app/project/interfaces/student.interface';
import { AuthService } from 'src/app/project/services/python/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  protected form!: FormGroup;
  protected subscriptions$: Subscription = new Subscription();
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
  ) {}
  ionViewDidLeave() {
    this.subscriptions$.unsubscribe();
  }
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
    if (!this.form.valid) return;
    let student: PartialStudent = {
      identification_document: this.form.get('identification_document')?.value,
      password: this.form.get('password')?.value,
    };
    this.subscriptions$.add(
      this.authService
        .login(student)
        .pipe(
          map((student) => {
            this.form.reset();
            this.router.navigate(['/private/home']);
          }),
        )
        .subscribe(),
    );
  }
}
