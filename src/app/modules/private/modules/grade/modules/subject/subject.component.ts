import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.scss',
})
export class SubjectComponent implements OnInit, OnDestroy {
  title: String = '';
  subscriptions$: Subscription = new Subscription();
  constructor(private route: ActivatedRoute) {}
  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }
  ngOnInit(): void {
    this.subscriptions$.add(
      this.route.paramMap.subscribe((params) => {
        this.title = params.get('title') || '';
      }),
    );
  }
}
