import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaucerRegisterComponent } from './saucer-register.component';

describe('SaucerRegisterComponent', () => {
  let component: SaucerRegisterComponent;
  let fixture: ComponentFixture<SaucerRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaucerRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaucerRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
