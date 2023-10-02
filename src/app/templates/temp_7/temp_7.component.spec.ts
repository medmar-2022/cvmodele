/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Temp_7Component } from './temp_7.component';

describe('Temp_7Component', () => {
  let component: Temp_7Component;
  let fixture: ComponentFixture<Temp_7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Temp_7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Temp_7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
