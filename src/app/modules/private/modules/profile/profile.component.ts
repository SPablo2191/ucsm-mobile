import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { PartialStudent } from 'src/app/project/interfaces/student.interface';
import { ProfileService } from 'src/app/project/services/python/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  student$!: Observable<PartialStudent>;
  constructor(
    private profileService: ProfileService,
    private navController: NavController,
  ) {}
  ngOnInit(): void {
    this.getProfile();
  }
  getProfile() {
    this.student$ = this.profileService.getProfile();
  }
  goBack() {
    this.navController.pop();
    this.navController.navigateBack('/home');
  }
}
