import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkNavComponent } from './work-nav.component';

describe('WorkNavComponent', () => {
  let component: WorkNavComponent;
  let fixture: ComponentFixture<WorkNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
