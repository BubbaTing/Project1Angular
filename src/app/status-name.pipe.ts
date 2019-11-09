import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'statusName'})
export class StatusName implements PipeTransform {
  transform(value: number): string {
    const statusCodes = {
        1: "Approved",
        2: "Denied",
        3: "Pending"
    };
    
    return statusCodes[value];
  }
}