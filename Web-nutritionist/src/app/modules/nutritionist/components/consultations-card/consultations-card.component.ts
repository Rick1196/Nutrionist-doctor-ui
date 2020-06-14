import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NutritionistService } from 'src/app/common/services/nutritionist.service';
import startOfDay from 'date-fns/startOfDay'
import endOfDay from 'date-fns/endOfDay'
@Component({
  selector: 'app-consultations-card',
  templateUrl: './consultations-card.component.html',
  styleUrls: ['./consultations-card.component.scss']
})
export class ConsultationsCardComponent implements OnInit {

  username: string;
  todoToday: any;
  params: { [k: string]: any } = {}
  constructor(private _router: ActivatedRoute, private _nutritionist: NutritionistService) { }

  ngOnInit(): void {
    this._router.queryParams.subscribe(params => {
      this.username = params.user_name;
      this.params.nutritionist = this.username;
      this.params.start = startOfDay(new Date());
      this.params.end = endOfDay(new Date());

      this._nutritionist.getConsultations(this.params).then(data => {
        this.todoToday = data;
        console.log(this.todoToday, this.params);

      }).catch(error => {
        console.error(error);

      })
    })
  }

}
