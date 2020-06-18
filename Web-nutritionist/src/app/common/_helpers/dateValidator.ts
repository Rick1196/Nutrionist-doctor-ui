import { AbstractControl } from '@angular/forms';
export function dateValidator(date: AbstractControl): {
    [key: string]: boolean;
} | null {
    let flag = false;
    if (!date.value) {
        return null;
    }
    const dateObj = new Date(date.value);
    const now = new Date();
    const diffTime = (now.getTime() - dateObj.getTime());
    const diff = (diffTime / (1000 * 60 * 60));
    if (diff >= 0) { flag = true; }
    return (flag === true) ? { date: flag } : null;
}
