import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HOWTOGETArrayAngularComponent } from './how-to-get-array-angular.component';

describe('HOWTOGETArrayAngularComponent', () => {
  let component: HOWTOGETArrayAngularComponent;
  let fixture: ComponentFixture<HOWTOGETArrayAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HOWTOGETArrayAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HOWTOGETArrayAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
