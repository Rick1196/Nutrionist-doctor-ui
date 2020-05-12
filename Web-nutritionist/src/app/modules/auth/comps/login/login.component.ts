import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {AuthService} from '../../../../common/services/auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    user_name: new FormControl('',Validators.required),
    password: new FormControl('', Validators.required),
  });
  errorResponse:string;
  constructor(private _auth:AuthService, private _router:Router) { }

  ngOnInit(): void {
    console.log(this.form);

  }
  submit():void{
    console.log(this.form.valid);
    this._auth.loginUser(this.form.value).then(success=>{
      this._router.navigate(['/nutritionist/home']);
    }).catch(err=>{
      console.error(err.error.error);
      this.errorResponse = err.error.error;
      
    })
  }

}
