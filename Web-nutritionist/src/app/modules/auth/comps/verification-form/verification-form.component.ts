import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../../common/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { NutritionistService } from '../../../../common/services/nutritionist.service';
@Component({
  selector: 'app-verification-form',
  templateUrl: './verification-form.component.html',
  styleUrls: ['./verification-form.component.scss']
})
export class VerificationFormComponent implements OnInit {

  user_name: string;
  response: string;
  success: boolean = false;
  form = new FormGroup({
    confirmation_code: new FormControl('', [Validators.required, Validators.minLength(4)])
  });

  constructor(private _auth: AuthService, private _router: ActivatedRoute, private _nutritionist: NutritionistService) { }
  ngOnInit(): void {
    this._router.queryParams.subscribe(params => {
      this.user_name = params.user_name;
      this._nutritionist.isVerified(this.user_name).then(data => {
        this.success = data.verified;
      }).catch(error => {
        console.error(error);

      })
    })
  }


  confirm(): void {
    if (this.form.valid) {
      let data = this.form.value;
      data.user_name = this.user_name;
      this._auth.verifyUser(data).then(success => {
        this.success = true;
      }).catch(error => {
        console.error(error.error.message);
        this.response = error.error.message;
      })
    }
  }

  resend():void{
    this._auth.resendCode(this.user_name).then(data=>{
      this.response = data.message;
    }).catch(err=>{
      console.error(err);
      
    })
  }

}
