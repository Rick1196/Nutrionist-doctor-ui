import { Component, OnInit } from '@angular/core';
import { NutritionistService } from '../../../../common/services/nutritionist.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Nutritionist } from 'src/app/common/entities/nutritionist';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {

  username: string;
  profile: Nutritionist;
  imageUrl: any;
  constructor(private nutritionist: NutritionistService, private router: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.router.queryParams.subscribe(params => {
      this.username = params.username;
      this.nutritionist.getNutritionistProfile(this.username).then(data => {
        this.profile = data;
        this.imageUrl = this.sanitizer.
          bypassSecurityTrustResourceUrl(this.profile.data_type + ',' + this.nutritionist.
            toBase64(this.profile.image));
        this.profile.image = null;
      }).catch(error => {
        console.error(error);
      });
    });
  }



}
