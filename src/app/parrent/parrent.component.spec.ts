import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParrentComponent } from './parrent.component';

describe('ParrentComponent', () => {
  let component: ParrentComponent;
  let fixture: ComponentFixture<ParrentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParrentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
