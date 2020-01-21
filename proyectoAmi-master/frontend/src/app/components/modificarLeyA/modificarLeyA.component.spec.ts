import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarLeyAComponent } from './modificarLeyA.component';

describe('ModificarLeyAComponent', () => {
  let component: ModificarLeyAComponent;
  let fixture: ComponentFixture<ModificarLeyAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarLeyAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarLeyAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});