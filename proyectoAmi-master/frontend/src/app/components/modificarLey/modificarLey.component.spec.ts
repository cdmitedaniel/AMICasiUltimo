import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarLeyComponent } from './modificarLey.component';

describe('ModificarLeyComponent', () => {
  let component: ModificarLeyComponent;
  let fixture: ComponentFixture<ModificarLeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarLeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarLeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});