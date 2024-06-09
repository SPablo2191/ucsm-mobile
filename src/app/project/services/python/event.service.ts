import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/services/base.service';
import { PartialEvent } from '../../interfaces/event.interface';
import { environment } from 'src/environments/environment';
import { Endpoint } from '../../enums/python/endpoint.enum';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';

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
        console.log(events);
        return events;
      }),
    );
  }
}
