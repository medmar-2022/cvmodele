/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Temp_2Component } from './temp_2.component';

describe('Temp_2Component', () => {
  let component: Temp_2Component;
  let fixture: ComponentFixture<Temp_2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Temp_2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Temp_2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
