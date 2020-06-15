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

  username: string;
  response: string;
  success = false;
  form = new FormGroup({
    confirmation_code: new FormControl('', [Validators.required, Validators.minLength(4)])
  });

  constructor(private auth: AuthService, private router: ActivatedRoute, private nutritionist: NutritionistService) { }
  ngOnInit(): void {
    this.router.queryParams.subscribe(params => {
      this.username = params.username;
      this.nutritionist.isVerified(this.username).then(data => {
        this.success = data.verified;
      }).catch(error => {
        console.error(error);

      });
    });
  }


  confirm(): void {
    if (this.form.valid) {
      const data = this.form.value;
      data.username = this.username;
      this.auth.verifyUser(data).then(success => {
        this.success = true;
      }).catch(error => {
        console.error(error.error.message);
        this.response = error.error.message;
      });
    }
  }

  resend(): void {
    this.auth.resendCode(this.username).then(data => {
      this.response = data.message;
    }).catch(err => {
      console.error(err);

    });
  }

}
