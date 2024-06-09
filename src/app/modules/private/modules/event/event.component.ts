import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { PartialEvent } from 'src/app/project/interfaces/event.interface';
import { EventService } from 'src/app/project/services/python/event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrl: './event.component.scss',
})
export class EventComponent implements OnInit {
  event$!: Observable<PartialEvent>;
  constructor(
    private eventService: EventService,
    private navController: NavController,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.getEvent();
  }
  getEvent() {
    let eventId = this.route.snapshot.paramMap.get('id');
    if (eventId) {
      this.event$ = this.eventService.getEvent(eventId);
    }
  }
  goBack() {
    this.navController.pop();
    this.navController.navigateBack('/home');
  }
}
