import { Component, OnInit, Input, ViewChild, TemplateRef, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-patient-card',
  templateUrl: './patient-card.component.html',
  styleUrls: ['./patient-card.component.scss']
})
export class PatientCardComponent implements OnInit {

  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;
  @Input() patient: any;
  @Output() refesh: EventEmitter<any> = new EventEmitter();
  modalData: {
    action: string;
    event: any;
  };
  constructor(private modal: NgbModal, private active: ActivatedRoute) { }

  ngOnInit(): void {
  }

  handleEvent(action: string, data: any): void {
    let event: any = Object.assign({}, data);
    this.modalData = { action, event };
    this.modal.open(this.modalContent, { size: 'lg' });
    // this.selected = event;
  }

  closeFun($event) {
    if ($event === true) {
      this.refesh.emit(true);
    } else {
      this.modal.dismissAll();
    }
  }

}
