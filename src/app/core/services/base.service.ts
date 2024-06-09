import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BaseService<T> {
  serverUrl: string | undefined;

  constructor(protected httpClient: HttpClient) {}
  protected get(options = {}): Observable<T[]> {
    return this.httpClient.get<T[]>(this.serverUrl!, options);
  }
  protected post(data: T) {
    return this.httpClient.post(this.serverUrl!, data);
  }
  protected getId(id: string, options = {}): Observable<T> {
    const url = `${this.serverUrl}${id}/`;
    return this.httpClient.get<T>(url, options);
  }
}
