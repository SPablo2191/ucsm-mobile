import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BaseService<T> {
  serverUrl: string | undefined;

  constructor(protected httpClient: HttpClient) {}
  get(params = {}): Observable<T[]> {
    return this.httpClient.get<T[]>(this.serverUrl!, { params });
  }
  post(data: T) {
    return this.httpClient.post(this.serverUrl!, data);
  }
  update(id: string, data: T): Observable<T> {
    const url = `${this.serverUrl}/${id}`;
    return this.httpClient.put<T>(url, data);
  }
  getId(id: string): Observable<T> {
    const url = `${this.serverUrl}/${id}`;
    return this.httpClient.get<T>(url);
  }
  delete(id: string): Observable<T> {
    const url = `${this.serverUrl}/${id}`;
    return this.httpClient.delete<T>(url);
  }
}
