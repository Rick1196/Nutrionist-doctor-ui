import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faSignInAlt, faUserPlus, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'
import {Location} from '@angular/common';
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  isOffcanvas = true;
  session: any;
  constructor(private library: FaIconLibrary, private _auth: AuthService, private _router: Router, private _location:Location) {
    library.addIcons(faSignInAlt, faUserPlus, faSignOutAlt)
  }

  ngOnInit(): void {
    this._auth.$session.subscribe({
      next: (v: any) => {
        let status = v;
        if (status.isLoggedIn == true) {
          this.session = v;
        } else {
          this.session = null;
          this._router.navigate(['']);
        }
      }
    });
  }

  async logout(){
    await this._auth.signOut();
    this._router.navigate(['auth/login']);
  }

  back():void{
    this._location.back();
  }
}
