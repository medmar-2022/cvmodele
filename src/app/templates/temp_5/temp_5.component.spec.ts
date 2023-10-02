/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Temp_5Component } from './temp_5.component';

describe('Temp_5Component', () => {
  let component: Temp_5Component;
  let fixture: ComponentFixture<Temp_5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Temp_5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Temp_5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
