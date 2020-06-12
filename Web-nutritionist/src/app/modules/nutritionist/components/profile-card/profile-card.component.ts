import { Component, OnInit } from '@angular/core';
import { NutritionistService } from '../../../../common/services/nutritionist.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser'
import { Nutritionist } from 'src/app/common/entities/nutritionist';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {

  user_name: string;
  profile: Nutritionist;
  imageUrl: any;
  constructor(private _nutritionist: NutritionistService, private _router: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this._router.queryParams.subscribe(params => {
      this.user_name = params.user_name;
      this._nutritionist.getNutritionistProfile(this.user_name).then(data => {
        this.profile = data;
        this.imageUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.profile.data_type+','+this._nutritionist.toBase64(this.profile.image));
        this.profile.image = null;
      }).catch(error => {
        console.error(error);
      })
    })
  }

  

}
