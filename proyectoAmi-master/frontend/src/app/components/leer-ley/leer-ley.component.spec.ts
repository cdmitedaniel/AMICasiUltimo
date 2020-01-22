import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeerLeyComponent } from './leer-ley.component';

describe('LeerLeyComponent', () => {
  let component: LeerLeyComponent;
  let fixture: ComponentFixture<LeerLeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeerLeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeerLeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
