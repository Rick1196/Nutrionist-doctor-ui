import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {AuthService} from '../../../../common/services/auth.service';
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
  constructor(private _auth:AuthService) { }

  ngOnInit(): void {
    console.log(this.form);

  }
  submit():void{
    console.log(this.form.valid);
    this._auth.loginUser(this.form.value).then(success=>{
      console.log(success);
      
    }).catch(err=>{
      console.error(err.error.error);
      this.errorResponse = err.error.error;
      
    })
  }

}
