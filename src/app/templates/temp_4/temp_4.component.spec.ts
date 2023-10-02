/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Temp_4Component } from './temp_4.component';

describe('Temp_4Component', () => {
  let component: Temp_4Component;
  let fixture: ComponentFixture<Temp_4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Temp_4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Temp_4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
