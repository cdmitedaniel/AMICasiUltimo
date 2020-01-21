import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivarComponent } from './archivar.component';

describe('ArchivarComponent', () => {
  let component: ArchivarComponent;
  let fixture: ComponentFixture<ArchivarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchivarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});