import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {AuthService} from '../../../common/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error:any;
  form: FormGroup = new FormGroup({
    user_name: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
  });
  constructor(private _auth:AuthService) { }

  ngOnInit(): void {
  }

  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.error = null;
      this._auth.login(this.form.value).then(data=>{
        console.log(data);
        
      }).catch(error=>{
        console.error(error);
        
      })
    }else{
      this.error = 'Por favor, introducir datos validos.'
    }
  }

}
