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
  constructor(private router: ActivatedRoute, private nutritionist: NutritionistService) { }

  ngOnInit(): void {
    this.router.queryParams.subscribe(params => {
      this.username = params.username;
      this.nutritionist.getStatistics(this.username).then(data => {
        this.statistics = data;
      }).catch(error => {
        console.error(error);

      });
    });
  }

}
