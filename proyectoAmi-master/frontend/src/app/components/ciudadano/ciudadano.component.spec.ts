
import { CiudadanoComponent } from './ciudadano.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('CiudadanoComponent', () => {
  let component: CiudadanoComponent;
  let fixture: ComponentFixture<CiudadanoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiudadanoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiudadanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
