import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NutritionistService } from '../../../../common/services/nutritionist.service';
import { Observable, Subject, merge } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit {
  @Input() data: any;
  username: string;
  patients: any[];
  model: any;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();
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
      }).catch(error => {
        console.error(error);

      });
    });
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      map(term => term === '' ? []
        : this.patients.filter(v => v.user.first_name.toUpperCase().indexOf(term.toUpperCase()) > -1).slice(0, 10))
    )


}
