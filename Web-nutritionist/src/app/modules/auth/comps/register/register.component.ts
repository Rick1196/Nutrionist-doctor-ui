import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  stage: number = 0;

  constructor(private _router:Router) { }

  ngOnInit(): void {

  }

  changeStage($event: any): void {
    if ($event.success == true) {
      this._router.navigate(["auth/verify"],{ queryParams: { user_name: $event.user_name},queryParamsHandling: 'merge'})
    }
  }



}
