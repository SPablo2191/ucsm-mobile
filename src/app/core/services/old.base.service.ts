import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { ApiRequest } from '../interfaces/request.interface';

@Injectable({
  providedIn: 'root',
})
export class OldBaseService<T> {
  serverUrl: string = environment.apiUrl;
  constructor(protected httpClient: HttpClient) {}
  postRequest(data: ApiRequest): Observable<T> {
    return this.httpClient.post<T>(this.serverUrl, data);
  }
}
