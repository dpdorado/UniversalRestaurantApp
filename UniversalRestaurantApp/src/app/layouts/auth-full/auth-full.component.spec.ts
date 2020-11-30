import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthFullComponent } from './auth-full.component';

describe('AuthFullComponent', () => {
  let component: AuthFullComponent;
  let fixture: ComponentFixture<AuthFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthFullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
