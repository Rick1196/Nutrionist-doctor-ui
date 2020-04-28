import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  stage: number = 0;

  constructor() { }

  ngOnInit(): void {

  }

  changeStage($event: any): void {
    if ($event == true) {
      this.stage = this.stage + 1;
    }
  }



}
