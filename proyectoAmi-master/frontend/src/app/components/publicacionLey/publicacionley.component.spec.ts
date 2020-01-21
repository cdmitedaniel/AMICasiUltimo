
import { PublicacionleyComponent } from './publicacionley.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('PublicacionleyComponent', () => {
  let component: PublicacionleyComponent;
  let fixture: ComponentFixture<PublicacionleyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicacionleyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicacionleyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
