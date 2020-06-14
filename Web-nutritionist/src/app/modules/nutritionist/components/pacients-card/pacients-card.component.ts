import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NutritionistService } from '../../../../common/services/nutritionist.service';
@Component({
  selector: 'app-pacients-card',
  templateUrl: './pacients-card.component.html',
  styleUrls: ['./pacients-card.component.scss']
})
export class PacientsCardComponent implements OnInit {
  username: string;
  statistics: any;
  constructor(private _router: ActivatedRoute, private _nutritionist: NutritionistService) { }

  ngOnInit(): void {
    this._router.queryParams.subscribe(params => {
      this.username = params.user_name;
      this._nutritionist.getStatistics(this.username).then(data => {
        this.statistics = data;
      }).catch(error => {
        console.error(error);

      })
    })
  }

}
