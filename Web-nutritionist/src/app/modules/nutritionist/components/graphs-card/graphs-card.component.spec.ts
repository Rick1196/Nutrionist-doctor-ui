import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphsCardComponent } from './graphs-card.component';

describe('GraphsCardComponent', () => {
  let component: GraphsCardComponent;
  let fixture: ComponentFixture<GraphsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
