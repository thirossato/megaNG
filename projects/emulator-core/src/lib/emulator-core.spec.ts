import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmulatorCore } from './emulator-core';

describe('EmulatorCore', () => {
  let component: EmulatorCore;
  let fixture: ComponentFixture<EmulatorCore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmulatorCore],
    }).compileComponents();

    fixture = TestBed.createComponent(EmulatorCore);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
