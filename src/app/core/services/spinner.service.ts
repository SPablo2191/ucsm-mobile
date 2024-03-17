import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  public numberOfRequests: number = 0;
  public showSpinner = new BehaviorSubject<boolean>(false);

  constructor() {}
  handleRequest = (state: string = 'minus'): void => {
    this.numberOfRequests = state === 'plus' ? this.numberOfRequests + 1 : this.numberOfRequests - 1;
    this.showSpinner.next(this.numberOfRequests > 0);
  };
}
