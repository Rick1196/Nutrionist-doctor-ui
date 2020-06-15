import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../../common/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loading = false;
  form = new FormGroup({
    user_name: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  errorResponse: string;
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  submit(): void {
    this.auth.loginUser(this.form.value).then((success) => {
      this.router.navigate(
        ['/nutritionist/home'],
        {
          queryParams: { username: this.form.controls.user_name.value },
          queryParamsHandling: 'merge',
        },
      );
    }).catch((err) => {
      this.loading = false;
      console.error(err.error.errors);
      this.errorResponse = err.error.errors[0].message.username;
    });
  }
}
