import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Puslapis3Component } from './puslapis3.component';

describe('Puslapis3Component', () => {
  let component: Puslapis3Component;
  let fixture: ComponentFixture<Puslapis3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Puslapis3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Puslapis3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
