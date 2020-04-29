import { AbstractControl } from '@angular/forms';
export function fileValidator(img: AbstractControl): {
  [key: string]: boolean;
} | null {
  let flag = false;
  if (!['jpg', 'jpeg', 'svg', 'png'].includes(img.value.split('.')[img.value.split('.').length - 1]))
    flag = true;
  console.log(flag);
  return (flag == true) ? { extension: flag } : null;
}
