import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaucerListComponent } from './saucer-list.component';

describe('SaucerListComponent', () => {
  let component: SaucerListComponent;
  let fixture: ComponentFixture<SaucerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaucerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaucerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
