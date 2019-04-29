import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VNavComponent } from './v-nav.component';

describe('VNavComponent', () => {
  let component: VNavComponent;
  let fixture: ComponentFixture<VNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
