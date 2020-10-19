import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';
import { ResolvedEmployeeList } from './resolved-employeelist.model';
import { of as observableOf } from 'rxjs';

@Injectable()
export class EmployeeListResolverService implements Resolve<Employee[] | string> {
    constructor(private _employeeService: EmployeeService) {}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Employee[] | string> {
        return this._employeeService.getEmployees().pipe(
            catchError((err: string) => observableOf(err))
            );

    }

}