import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/services/base.service';
import { PartialEvent } from '../../interfaces/event.interface';
import { environment } from 'src/environments/environment';
import { Endpoint } from '../../enums/python/endpoint.enum';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventService extends BaseService<PartialEvent | PartialEvent[]> {
  override serverUrl: string | undefined = environment.apiUrl + Endpoint.EVENT;
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }
  getEvents(): Observable<PartialEvent[]> {
    let token = localStorage.getItem('token');
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Authorization', 'Token' + ' ' + token);
    return this.get({
      headers: headers,
    }).pipe(
      map((response: any) => {
        let events = response.results;
        return events;
      }),
      catchError((err: HttpErrorResponse) => {
        return throwError(() => err);
      }),
    );
  }
  getEvent(eventId: string): Observable<PartialEvent> {
    let token = localStorage.getItem('token');
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Authorization', 'Token' + ' ' + token);
    return this.getId(eventId, {
      headers: headers,
    }).pipe(
      map((response: any) => {
        let event: PartialEvent = response;
        return event;
      }),
      catchError((err: HttpErrorResponse) => {
        return throwError(() => err);
      }),
    );
  }
}
