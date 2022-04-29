import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinationChartComponent } from './vaccination-chart.component';

describe('VaccinationChartComponent', () => {
  let component: VaccinationChartComponent;
  let fixture: ComponentFixture<VaccinationChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccinationChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinationChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
