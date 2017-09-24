import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphNewComponentComponent } from './graph-new-component.component';

describe('GraphNewComponentComponent', () => {
  let component: GraphNewComponentComponent;
  let fixture: ComponentFixture<GraphNewComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphNewComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphNewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
