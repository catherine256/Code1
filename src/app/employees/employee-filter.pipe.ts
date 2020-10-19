
import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../models/employee.model';

@Pipe ({
    name: 'employeeFilter',
    pure: false
})

export class EmployeeFilterPipe implements PipeTransform {
    private couter = 0;
    transform(employees: Employee[], searchTerm: string): Employee[] {
        this.couter++;
        console.log('Filter Pipe Executed Count' + this.couter);
        if (!employees || !searchTerm) {
            return employees;
        }
        return employees.filter(employee => employee.name.toLocaleLowerCase().indexOf(searchTerm.toLocaleLowerCase()) !== -1);

    }
}
