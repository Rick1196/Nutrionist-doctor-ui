import { Component, OnInit, Input, ViewChild, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NutritionistService } from '../../../../common/services/nutritionist.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { dateValidator } from '../../../../common/_helpers/dateValidator';
import Swal from 'sweetalert2';
import format from 'date-fns/format';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit {
  @Input() data: any;
  @Output() closeEv: EventEmitter<any> = new EventEmitter();
  loading = false;
  form: FormGroup;
  username: string;
  patients: any[];
  filtered: any[] = [];
  model = '';
  event: { [k: string]: any } = {
    start: null,
    color: {
      primary: '',
      secondary: ''
    },
    duration: '',
    patient_id: ''
  };
  durations = [
    { name: '15 minutos', minutes: 15 },
    { name: '30 minutos', minutes: 30 },
    { name: '45 minutos', minutes: 45 },
    { name: '1 hora', minutes: 60 },
    { name: '2 horas', minutes: 120 },
  ];
  constructor(private router: ActivatedRoute, private nutritionist: NutritionistService) { }

  ngOnInit(): void {
    this.router.queryParams.subscribe(params => {
      this.username = params.username;
      const queryParams = {
        pagination: false,
        params: false
      };
      if (this.data._id) {
        this.event._id = this.data._id;
      }
      this.event.nutritionist = this.username;
      this.event.color = this.data.color;
      this.event.duration = this.data.duration;
      this.nutritionist.getPatients(queryParams, this.username).then(data => {
        this.patients = data.patients;

        if (this.data.patient_id) {
          this.model = `${this.data.patient_id.user.first_name} ${this.data.patient_id.user.last_name}`;
          this.event.patient_id = this.data.patient_id._id;
          this.event.start = this.data.start;
        }
        this.buildForm();
        this.bindData();
      }).catch(error => {
        console.error(error);
      });
    });
  }

  buildForm() {
    this.form = new FormGroup({
      patient: new FormControl(this.model, Validators.required),
      start: new FormControl(this.event.start, [Validators.required, dateValidator]),
      duration: new FormControl(this.event.duration, Validators.required),
      primary: new FormControl(this.event.color.primary, Validators.required),
      secondary: new FormControl(this.event.color.secondary, Validators.required)
    });
  }

  bindData() {
    this.form.valueChanges.subscribe(values => {
      this.event.start = values.start;
      this.event.duration = values.duration;
      this.event.color.primary = values.primary;
      this.event.color.secondary = values.secondary;
    });
  }


  onSearch(text: any): void {
    if (text.length > 2) {
      this.filtered = this.patients.filter(x => (`${x.user.first_name} ${x.user.last_name}`.indexOf(text.toUpperCase()) > -1));
    } else {
      this.filtered = [];
    }
    if (text === '') {
      this.filtered = [];
    }
  }

  select(s: any): void {
    this.event.patient_id = s._id;
    this.model = `${s.user.first_name} ${s.user.last_name}`;
    this.form.controls.patient.setValue(`${s.user.first_name} ${s.user.last_name}`);
    this.filtered = [];
  }

  save() {
    if (this.data._id) {
      this.updateConsultation();
    } else {
      this.createConsultation();
    }
  }

  createConsultation() {
    this.nutritionist.scheduleConsultation(this.event).then(data => {
      this.loading = false;
      this.closeEv.emit(true);
      this.alertSuccess(`Consulta registrada`, `Se ha agendado una consulta para ${this.form.controls.patient.value} en la fecha ${format(new Date(this.event.start), 'Pp')}`);
    }).catch(error => {
      this.loading = false;
      this.alertFail('Error', 'Existen otras citas agendadas dentro del rengo selccionado');
      console.error(error);
    });
  }

  updateConsultation() {
    this.nutritionist.putConsultation(this.event).then(data => {
      this.loading = false;
      this.closeEv.emit(true);
      this.alertSuccess(`Consulta actualizada`, `Se ha agendado una consulta para ${this.form.controls.patient.value} en la fecha ${format(new Date(this.event.start), 'Pp')}`);
    }).catch(error => {
      console.error(error);
    });
  }


  alertSuccess(title: string, body: string) {
    Swal.fire(
      `${title}`,
      `${body}`,
      'success'
    );
  }

  alertFail(title: string, body: string) {
    Swal.fire(
      `${title}`,
      `${body}`,
      'error'
    );
  }



}
