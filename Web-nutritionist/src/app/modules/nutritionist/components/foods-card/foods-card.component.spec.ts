import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodsCardComponent } from './foods-card.component';

describe('FoodsCardComponent', () => {
  let component: FoodsCardComponent;
  let fixture: ComponentFixture<FoodsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
