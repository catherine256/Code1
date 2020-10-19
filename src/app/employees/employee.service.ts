import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { from, Observable, throwError } from 'rxjs';
import { of as observableOf } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';




@Injectable()
export class EmployeeService {
  constructor(private httpClient: HttpClient) { }
  // private listEmployees: Employee[] = [
  //   {
  //     id: 1,
  //     name: 'Nyangoma Esther',
  //     gender: 'Female',
  //     email: 'esthernyamgoma@gmail.com',
  //     phoneNumber: 701574049,
  //     contactPreference: 'Email',
  //     dateOfBirth: new Date('04/01/2020'),
  //     department: '1',
  //     isActive: true,
  //     photoPath: 'assets/images/nyamgoma.jpg',
  //     password: 'nyangoma',
  //     confirmPassword: 'nyangoma'

  //   },
  //   {
  //     id: 2,
  //     name: 'Kemigisha Olivia',
  //     gender: 'Female',
  //     email: 'johnwycliffnuwamanya@gmail.com',
  //     phoneNumber: 756208509,
  //     contactPreference: 'Email',
  //     dateOfBirth: new Date('04/14/2012'),
  //     department: '3',
  //     isActive: true,
  //     photoPath: 'assets/images/kemi.jpg',
  //     password: 'kemigisha',
  //     confirmPassword: 'kemigisha'
  //   },
  //   {
  //     id: 3,
  //     name: 'CATHY',
  //     gender: 'Female',
  //     email: 'cnakyanzi2019@gmail.com',
  //     phoneNumber: 756208509,
  //     contactPreference: 'Email',
  //     dateOfBirth: new Date('03/14/1995'),
  //     department: '4',
  //     isActive: true,
  //     photoPath: 'assets/images/cathy.png',
  //     password: 'nakyanzi',
  //     confirmPassword: 'nakyanzi'
  //   }
  // ];

  baseUrl = 'http://localhost:3000/employees';

  getEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.baseUrl)
      .pipe(catchError(this.handleError));

    // return observableOf(this.listEmployees).pipe(delay(500));
  }
  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client Service Error ', errorResponse.error.message);
    } else {
      console.error('Server Side Error ', errorResponse);
    }
    return throwError('There is a problem with the service. We are notified & working on it. Please try again later');
  }

  getEmployee(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.baseUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }
  addEmployee(employee: Employee): Observable<Employee> {

      return this.httpClient.post<Employee>(this.baseUrl, employee, {
        headers: new HttpHeaders({
          'content-type': 'application/json'
        })
      })
        .pipe(catchError(this.handleError));
  }

  updateEmployee(employee: Employee): Observable<void> {
    return this.httpClient.put<void>(`${this.baseUrl}/${employee.id}`, employee, {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    })
      .pipe(catchError(this.handleError));

  }

  deleteEmployee(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.baseUrl)
    .pipe(catchError(this.handleError))
  }

}