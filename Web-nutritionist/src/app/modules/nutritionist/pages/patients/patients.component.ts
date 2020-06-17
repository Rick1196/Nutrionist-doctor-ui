import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NutritionistService } from '../../../../common/services/nutritionist.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {
  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;
  loadingData = true;
  username: string;
  queryParams: { [k: string]: any } = {
    pagination: true,
    page: 1,
    size: 5,
    params: false,
    total: 0
  };
  patientsList: any[];
  modalData: {
    action: string;
    event: any;
  };
  newPatient = {
    user: {
      first_name: '',
      last_name: '',
      birth_date: '',
      gender: '',
      email: '',
      phone: '',
      countrie: '',
      state: '',
      citie: '',
      direction: '',
      user_name: '',
      password: '',
      role: 'patient'
    },
    patient: {
      marital_status: '',
      ocupation: ''
    },
    nutritionist: ''
  };
  constructor(private modal: NgbModal, private active: ActivatedRoute, private nutritionist: NutritionistService,
    // tslint:disable-next-line: align
    private router: Router) { }
  ngOnInit(): void {
    this.active.queryParams.subscribe(params => {
      this.username = params.username;
      this.newPatient.nutritionist = params.username;
      this.queryParams.page = params.page;
      this.queryParams.size = params.size;
      this.requestPatients();
    });
  }

  requestPatients(): void {
    this.nutritionist.getPatients(this.queryParams, this.username).then(data => {
      this.patientsList = data.patients;
      this.queryParams.total = data.total;
      this.loadingData = false;
    }).catch(error => {
      console.error(error);
    });
  }

  pageChanged(event: any) {
    this.queryParams.page = event;
    this.router.navigate(
      [],
      {
        queryParams: { page: event, size: this.queryParams.size },
        queryParamsHandling: 'merge',
      },
    );
  }

  handleEvent(action: string, event: any): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  closeFun($event) {
    if ($event === true) {
      this.requestPatients();
      this.modal.dismissAll();
    } else {
      this.modal.dismissAll();
    }
  }

}
