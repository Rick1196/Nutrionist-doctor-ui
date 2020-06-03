import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientsCardComponent } from './pacients-card.component';

describe('PacientsCardComponent', () => {
  let component: PacientsCardComponent;
  let fixture: ComponentFixture<PacientsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacientsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacientsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
