import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploeeRegComponent } from './emploee-reg.component';

describe('EmploeeRegComponent', () => {
  let component: EmploeeRegComponent;
  let fixture: ComponentFixture<EmploeeRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmploeeRegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmploeeRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
