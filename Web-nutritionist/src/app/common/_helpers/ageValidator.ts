import { AbstractControl } from '@angular/forms';
export function ageValidator(date: AbstractControl): {
    [key: string]: boolean;
} | null {
    let flag = false;
    if (!date.value) {
        return null;
    }
    const dateObj = new Date(date.value);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - dateObj.getTime());
    const years = (diffTime / (1000 * 60 * 60 * 24)) / 365;
    if (years < 18.0) { flag = true; }
    return (flag === true) ? { age: flag } : null;
}
