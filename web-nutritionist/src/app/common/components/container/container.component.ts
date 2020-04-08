import { Component, OnInit } from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {MatIcon} from '@angular/material/icon';
import {MatSidenav} from '@angular/material/sidenav';
import {MatNavList} from '@angular/material/list';
import {MatButton} from '@angular/material/button';


@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
