import { Pipe, PipeTransform } from '@angular/core';
import { LoginService } from './login.service';

@Pipe({name: 'FirstName'})
export class FirstName implements PipeTransform{

    constructor(private Users: LoginService) {}

    nameCodes = {
        1: 'Ashely',
        2: 'Billy',
        3: 'Carter',
        4: 'Danny',
        5: 'Elsa',
    }
    
    transform(value: number): string {
        return this.nameCodes[value];
      }
}