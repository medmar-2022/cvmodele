/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Cv_editComponent } from './cv_edit.component';

describe('Cv_editComponent', () => {
  let component: Cv_editComponent;
  let fixture: ComponentFixture<Cv_editComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cv_editComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cv_editComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
