import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'statusOrTypeName'})
export class StatusOrTypeName implements PipeTransform {
  statusCodes = {
    1: "Approved",
    2: "Denied",
    3: "Pending"
  };

  typeCodes = {
    1: "Lodging",
    2: "Travel",
    3: "Food",
    4: "Other"
  };

  transform(value: number, conversionType: string): string {
    return (conversionType === "status") ? (this.statusCodes[value]) : (this.typeCodes[value]);
  }
}