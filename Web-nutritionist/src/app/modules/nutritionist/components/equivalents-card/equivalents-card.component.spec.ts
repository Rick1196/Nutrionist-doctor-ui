import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquivalentsCardComponent } from './equivalents-card.component';

describe('EquivalentsCardComponent', () => {
  let component: EquivalentsCardComponent;
  let fixture: ComponentFixture<EquivalentsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquivalentsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquivalentsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
