import { Component, OnInit } from '@angular/core';
import {  FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {faSignInAlt,faUserPlus,faSignOutAlt} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  isOffcanvas = true;
  constructor(private library:FaIconLibrary) { 
    library.addIcons(faSignInAlt,faUserPlus,faSignOutAlt)
  }

  ngOnInit(): void {
  }

}
