import { Pipe, PipeTransform } from '@angular/core';
import { format } from 'date-fns';

@Pipe({
  name: 'dateFormater'
})
export class DateFormaterPipe implements PipeTransform {

  transform(originalDate: string): any {
    const result = format(new Date(originalDate), 'Pp');
    return result;
  }

}
