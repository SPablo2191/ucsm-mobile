import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/services/base.service';
import { Enrollment, PartialEnrollment } from '../../interfaces/enrollment.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Endpoint } from '../../enums/python/endpoint.enum';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EnrollmentService extends BaseService<PartialEnrollment | PartialEnrollment[]> {
  override serverUrl: string | undefined = environment.apiUrl + Endpoint.ENROLLMENT;
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }
  getEnrollments(): Observable<PartialEnrollment[]> {
    console.log(this.serverUrl, localStorage.getItem('identification_document'));
    return this.get({
      identification_document: localStorage.getItem('identification_document'),
    }).pipe(
      map((response: any) => {
        let enrollments = response.results[0];
        return enrollments;
      }),
    );
  }
}
