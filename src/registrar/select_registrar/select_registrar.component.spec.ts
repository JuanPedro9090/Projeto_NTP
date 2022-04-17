/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SelectCustomTriggerExample } from './select_registrar.component';

describe('Select_registrarComponent', () => {
  let component: SelectCustomTriggerExample;
  let fixture: ComponentFixture<SelectCustomTriggerExample>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectCustomTriggerExample ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCustomTriggerExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
