import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-pacients-card',
  templateUrl: './pacients-card.component.html',
  styleUrls: ['./pacients-card.component.scss']
})
export class PacientsCardComponent implements OnInit {
  user_name:string;
  constructor(private _router:ActivatedRoute) { }

  ngOnInit(): void {
    this._router.queryParams.subscribe(params => {
      this.user_name = params.user_name;
    })
  }

}
