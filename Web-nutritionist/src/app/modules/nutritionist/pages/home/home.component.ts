import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _router: Router, private _activated: ActivatedRoute) { }

  ngOnInit(): void {
    let _info = JSON.parse(localStorage.getItem('_DATA'));

    this._router.navigate(
      [],
      {
        queryParams: { user_name: _info.user },
        queryParamsHandling: 'merge', // remove to replace all query params by provided
      });
  }

}
