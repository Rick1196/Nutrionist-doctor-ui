import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MiscService } from '../../../../common/services/misc.service';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { NutritionistService } from '../../../../common/services/nutritionist.service';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.scss']
})
export class ModalFormComponent implements OnInit {
  @Input() modalData: any;
  @Output() closeEv: EventEmitter<any> = new EventEmitter();
  responseError: any;
  loading = false;
  form: FormGroup;
  data: any;
  countries: any = [];
  states: any = [];
  cities: any = [];
  genders: any = [
    'Hombre',
    'Mujer',
    'Otros'
  ];
  status: any = [
    'Soltero',
    'Casado',
    'Divorciado',
    'Viudo',
    'Union libre'
  ];
  constructor(private toastr: ToastrService, private misc: MiscService, private nutritionist: NutritionistService) { }

  ngOnInit(): void {
    this.misc.getCountires().then(data => {
      this.data = data;
      this.data.forEach(element => {
        // tslint:disable-next-line: forin
        for (const c in element) {
          this.countries.push(c);
        }
        this.buildForm();
        if (this.modalData.event.user.countrie !== '') {
          this.setPlaces();
        }
      });
      this.bindData();
    }).catch(error => {
      console.error(error);

    });
  }

  setPlaces(): void {
    this.filterStates(this.modalData.event.user.countrie);
    this.filterCitie(this.modalData.event.user.state);
  }

  filterStates(countrie: string): void {
    const index = this.data.findIndex(x => Object.keys(x)[0] === countrie);
    this.states = Object.keys(this.data[index][countrie]);
    this.form.controls.state.setValue(this.modalData.event.user.state);
  }

  filterCitie(state: string): void {
    const index = this.data.findIndex(x => Object.keys(x)[0] === this.form.controls.countrie.value);
    this.cities = this.data[index][this.form.controls.countrie.value][state];
    this.form.controls.citie.setValue(this.modalData.event.user.citie);
  }

  buildForm(): void {
    this.form = new FormGroup({
      first_name: new FormControl(this.modalData.event.user.first_name, Validators.required),
      last_name: new FormControl(this.modalData.event.user.last_name, Validators.required),
      birth_date: new FormControl(this.modalData.event.user.birth_date.toString().split('T')[0], [Validators.required]),
      gender: new FormControl(this.modalData.event.user.gender, Validators.required),
      direction: new FormControl(this.modalData.event.user.direction, Validators.required),
      countrie: new FormControl(this.modalData.event.user.countrie, Validators.required),
      state: new FormControl('', Validators.required),
      citie: new FormControl('', Validators.required),
      ocupation: new FormControl(this.modalData.event.ocupation, Validators.required),
      marital_status: new FormControl(this.modalData.event.marital_status, Validators.required),
      phone: new FormControl(this.modalData.event.user.phone, Validators.required),
      email: new FormControl(this.modalData.event.user.email, Validators.required)
    });
  }

  saveChanges() {
    if (this.modalData.action === 'create') {
      this.cretePatient();
    } else if (this.modalData.action === 'edit') {
      this.modifyPatient();
    }
  }

  bindData() {
    this.form.valueChanges.subscribe(values => {
      this.modalData.event.user.first_name = values.first_name.toUpperCase();
      this.modalData.event.user.last_name = values.last_name.toUpperCase();
      this.modalData.event.user.birth_date = values.birth_date;
      this.modalData.event.user.countrie = values.countrie;
      this.modalData.event.user.state = values.state;
      this.modalData.event.user.citie = values.citie;
      this.modalData.event.user.direction = values.direction;
      this.modalData.event.user.gender = values.gender;
      this.modalData.event.user.email = values.email;
      this.modalData.event.user.phone = values.phone;
      if (this.modalData.action === 'create') {
        this.modalData.event.patient.marital_status = values.marital_status;
        this.modalData.event.patient.ocupation = values.ocupation;
      } else if (this.modalData.action === 'edit') {
        this.modalData.event.marital_status = values.marital_status;
        this.modalData.event.ocupation = values.ocupation;
      }
    });
  }

  cretePatient() {
    this.misc.generateUsername({
      first_name: this.modalData.event.user.first_name,
      last_name: this.modalData.event.user.last_name
    }).then(data => {
      this.modalData.event.user.user_name = data.user_name;
      this.modalData.event.user.password = Math.random().
        toString(36).substring(2, 8) + Math.random().toString(36).substring(2, 8).toUpperCase();
    }).then(() => {
      this.nutritionist.registerPatient(this.modalData.event).then(data => {
        this.alertSuccess('Paciente registrado.', `Se ha enviado un correo de confirmacion a ${this.modalData.event.user.email}`);
        this.loading = false;
        this.closeEv.emit(true);
      }).catch(error => {
        console.error(error);
        this.showError('Ups!', 'Ha ocurrido un error');
      });
    });
  }

  modifyPatient() {
    this.nutritionist.putPatient(this.modalData.event).then(data => {
      this.showSuccess('Exito!', 'Paciente actualizado');
      this.closeEv.emit(false);
    }).catch(error => {
      this.showError('Ups!', 'Ha ocurrido un error');
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

  showSuccess(title: string, body: string) {
    this.toastr.success(title, body);
  }

  showError(title: string, body: string) {
    this.toastr.error(title, body);
  }

  closeFun($event) {
    this.clearForm();
    this.closeEv.emit($event);
  }

  clearForm() {
    this.form.reset();
  }

}
