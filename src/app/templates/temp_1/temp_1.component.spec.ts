/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Temp_1Component } from './temp_1.component';

describe('Temp_1Component', () => {
  let component: Temp_1Component;
  let fixture: ComponentFixture<Temp_1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Temp_1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Temp_1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
