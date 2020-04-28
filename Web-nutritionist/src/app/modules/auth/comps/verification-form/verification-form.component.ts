import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../../common/services/auth.service';
@Component({
  selector: 'app-verification-form',
  templateUrl: './verification-form.component.html',
  styleUrls: ['./verification-form.component.scss']
})
export class VerificationFormComponent implements OnInit {

  @Output() onSuccess: EventEmitter<any> = new EventEmitter();
  @Input() user_name: string;

  form = new FormGroup({
    confirmation_code: new FormControl('', Validators.required)
  });

  constructor(private _auth: AuthService) { }
  ngOnInit(): void {
  }


  confirm(): void {
    if (this.form.valid) {
      let data = this.form.value;
      data.user_name = this.user_name;
      this._auth.verifyUser(data).then(success => {
        this.onSuccess.emit(true);
      }).catch(error => {
        console.error(error);

      })
    }
  }

}
