/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EmploisComponent } from './emplois.component';

describe('EmploisComponent', () => {
  let component: EmploisComponent;
  let fixture: ComponentFixture<EmploisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmploisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
