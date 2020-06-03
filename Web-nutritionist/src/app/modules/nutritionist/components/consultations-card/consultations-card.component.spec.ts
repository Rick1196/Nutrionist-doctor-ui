import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationsCardComponent } from './consultations-card.component';

describe('ConsultationsCardComponent', () => {
  let component: ConsultationsCardComponent;
  let fixture: ComponentFixture<ConsultationsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultationsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
