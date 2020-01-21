import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialAsambleistaComponent } from './historial-asambleista.component';

describe('HistorialAsambleistaComponent', () => {
  let component: HistorialAsambleistaComponent;
  let fixture: ComponentFixture<HistorialAsambleistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorialAsambleistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialAsambleistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
