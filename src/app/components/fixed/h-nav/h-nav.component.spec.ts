import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HNavComponent } from './h-nav.component';

describe('HNavComponent', () => {
  let component: HNavComponent;
  let fixture: ComponentFixture<HNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
