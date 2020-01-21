
import { RolComponent } from './rol.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('RolComponent', () => {
  let component: RolComponent;
  let fixture: ComponentFixture<RolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
