import { Component, OnInit } from '@angular/core';
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
  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.getEvent();
  }
  getEvent() {
    this.event$ = this.eventService.getEvent();
  }
}
