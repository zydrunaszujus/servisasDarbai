import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Puslapis1Component } from './puslapis1.component';

describe('Puslapis1Component', () => {
  let component: Puslapis1Component;
  let fixture: ComponentFixture<Puslapis1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Puslapis1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Puslapis1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
