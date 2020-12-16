import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklySaucersComponent } from './weekly-saucers.component';

describe('WeeklySaucersComponent', () => {
  let component: WeeklySaucersComponent;
  let fixture: ComponentFixture<WeeklySaucersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklySaucersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklySaucersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
