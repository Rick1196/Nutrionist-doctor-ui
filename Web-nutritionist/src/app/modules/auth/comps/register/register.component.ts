import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  stage = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  changeStage($event: any): void {
    if ($event.success === true) {
      this.router.navigate(['auth/verify'], { queryParams: { username: $event.user_name }, queryParamsHandling: 'merge' });
    }
  }



}
