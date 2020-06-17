import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ageCal'
})
export class AgeCalPipe implements PipeTransform {

  transform(birthDate: string): unknown {
    const dateObj = new Date(birthDate);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - dateObj.getTime());
    const years = Math.round((diffTime / (1000 * 60 * 60 * 24)) / 365);
    return years;
  }

}
