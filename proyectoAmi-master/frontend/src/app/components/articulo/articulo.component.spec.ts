
import { ArticuloComponent } from './articulo.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('ArticuloComponent', () => {
  let component: ArticuloComponent;
  let fixture: ComponentFixture<ArticuloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticuloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
