import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { NutritionistService } from '../../../../common/services/nutritionist.service';
import { DomSanitizer } from '@angular/platform-browser'
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile: any;
  imageUrl: any;
  username: string;
  form = new FormGroup({
    first_name: new FormControl(this.profile.user.user_name, Validators.required),
    last_name: new FormControl(this.profile.user.last_name, Validators.required),
    birth_date: new FormControl(this.profile.user.birth_date, Validators.required),
    gender:new FormControl(this.profile.user.gender, Validators.required),
    email: new FormControl(this.profile.user.email, Validators.required),
    phone: new FormControl(this.profile.user.phone, Validators.required),
    direction: new FormControl(this.profile.user.direction, Validators.required),
    countrie: new FormControl(this.profile.user.countrie, Validators.required),
    state: new FormControl(this.profile.user.state, Validators.required),
    citie: new FormControl(this.profile.user.citie, Validators.required)
  })
  constructor(private _router: ActivatedRoute, private _nutritionist: NutritionistService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this._nutritionist.$nutritionist.subscribe({
      next: (v: any) => {
        this.profile = v;
        if (this.profile == null) {
          this.getParams().then(username => {
            this._nutritionist.getNutritionistProfile(username)
          }).then(() => {
            this.imageUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.profile.nutritionist.data_type + ',' + this._nutritionist.toBase64(this.profile.nutritionist.image));
          })
        } else {
          this.imageUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.profile.nutritionist.data_type + ',' + this._nutritionist.toBase64(this.profile.nutritionist.image));
        }
      }
    })
  }

  getParams(): Promise<any> {
    return new Promise((resolve, reject) => {
      this._router.queryParams.subscribe((params) => {
        resolve(params.user_name);
      })
    })

  }

}
