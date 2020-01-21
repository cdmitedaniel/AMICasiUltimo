import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearLeyComponent } from './crearLey.component';

describe('CrearLeyComponent', () => {
  let component: CrearLeyComponent;
  let fixture: ComponentFixture<CrearLeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearLeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearLeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});