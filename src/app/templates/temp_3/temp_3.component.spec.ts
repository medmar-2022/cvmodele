/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Temp_3Component } from './temp_3.component';

describe('Temp_3Component', () => {
  let component: Temp_3Component;
  let fixture: ComponentFixture<Temp_3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Temp_3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Temp_3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
