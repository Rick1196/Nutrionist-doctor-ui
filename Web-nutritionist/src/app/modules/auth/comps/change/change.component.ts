import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../../common/services/auth.service';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.scss']
})
export class ChangeComponent implements OnInit {
  username: string;
  response: string;
  success = false;
  form = new FormGroup({
    confirmation_code: new FormControl('', [Validators.required, Validators.minLength(4)]),
    password: new FormControl('', Validators.required)
  });
  constructor(private router: ActivatedRoute, private auth: AuthService) { }

  ngOnInit(): void {
    this.router.queryParams.subscribe(params => {
      this.username = params.username;
    });
  }

  confirm(): void {
    if (this.form.valid) {
      const data = this.form.value;
      data.username = this.username;
      this.auth.changePassword(data.username, data.password, data.confirmation_code).then(success => {
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
