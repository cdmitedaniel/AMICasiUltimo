import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeyItemComponent } from './ley-item.component';

describe('LeyItemComponent', () => {
  let component: LeyItemComponent;
  let fixture: ComponentFixture<LeyItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeyItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
