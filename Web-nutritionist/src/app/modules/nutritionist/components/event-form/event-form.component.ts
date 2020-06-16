import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NutritionistService } from '../../../../common/services/nutritionist.service';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit {
  @Input() data: any;
  username: string;
  patients: any[];
  filtered: any[] = [];
  model = '';
  event = {
    date: null
  };
  constructor(private router: ActivatedRoute, private nutritionist: NutritionistService) { }

  ngOnInit(): void {
    this.router.queryParams.subscribe(params => {
      this.username = params.username;
      const queryParams = {
        pagination: false,
        params: false
      };
      this.nutritionist.getPatients(queryParams, this.username).then(data => {
        this.patients = data;
        console.log(this.data);
        if (this.data.patient_id) {
          this.model = `${this.data.patient_id.user.first_name} ${this.data.patient_id.user.last_name}`;
          this.event.date = this.data.start;
        }

      }).catch(error => {
        console.error(error);

      });
    });
  }

  onSearch(text: any): void {
    if (text.length > 2) {
      this.filtered = this.patients.filter(x => (`${x.user.first_name} ${x.user.last_name}`.indexOf(text.toUpperCase()) > -1));
      console.log(this.filtered);
    } else {
      this.filtered = [];
    }
    if (text === '') {
      this.filtered = [];
    }
  }

  select(s: any): void {
    this.model = `${s.user.first_name} ${s.user.last_name}`;
    this.filtered = [];
  }


}
