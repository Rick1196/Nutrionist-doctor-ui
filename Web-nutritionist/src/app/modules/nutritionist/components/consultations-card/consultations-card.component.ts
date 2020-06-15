import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NutritionistService } from 'src/app/common/services/nutritionist.service';
import startOfDay from 'date-fns/startOfDay';
import endOfDay from 'date-fns/endOfDay';
@Component({
  selector: 'app-consultations-card',
  templateUrl: './consultations-card.component.html',
  styleUrls: ['./consultations-card.component.scss']
})
export class ConsultationsCardComponent implements OnInit {

  username: string;
  todoToday: any;
  params: { [k: string]: any } = {};
  constructor(private router: ActivatedRoute, private nutritionist: NutritionistService) { }

  ngOnInit(): void {
    this.router.queryParams.subscribe(params => {
      this.username = params.username;
      this.params.nutritionist = this.username;
      this.params.start = startOfDay(new Date());
      this.params.end = endOfDay(new Date());
      this.params.atended = false;
      this.nutritionist.getConsultations(this.params).then(data => {
        this.todoToday = data;

      }).catch(error => {
        console.error(error);

      });
    });
  }

}
