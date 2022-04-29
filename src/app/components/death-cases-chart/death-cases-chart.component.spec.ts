import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeathCasesChartComponent } from './death-cases-chart.component';

describe('DeathCasesChartComponent', () => {
  let component: DeathCasesChartComponent;
  let fixture: ComponentFixture<DeathCasesChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeathCasesChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeathCasesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
