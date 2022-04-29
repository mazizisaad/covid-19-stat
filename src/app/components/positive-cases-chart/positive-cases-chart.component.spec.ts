import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositiveCasesChartComponent } from './positive-cases-chart.component';

describe('PositiveCasesChartComponent', () => {
  let component: PositiveCasesChartComponent;
  let fixture: ComponentFixture<PositiveCasesChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PositiveCasesChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PositiveCasesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
