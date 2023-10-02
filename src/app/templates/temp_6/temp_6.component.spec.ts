/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Temp_6Component } from './temp_6.component';

describe('Temp_6Component', () => {
  let component: Temp_6Component;
  let fixture: ComponentFixture<Temp_6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Temp_6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Temp_6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
