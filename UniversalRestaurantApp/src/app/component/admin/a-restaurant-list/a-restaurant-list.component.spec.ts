import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ARestaurantListComponent } from './a-restaurant-list.component';

describe('ARestaurantListComponent', () => {
  let component: ARestaurantListComponent;
  let fixture: ComponentFixture<ARestaurantListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ARestaurantListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ARestaurantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
