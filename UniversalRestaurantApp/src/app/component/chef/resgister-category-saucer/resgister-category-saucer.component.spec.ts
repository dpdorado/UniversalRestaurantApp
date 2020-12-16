import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResgisterCategorySaucerComponent } from './resgister-category-saucer.component';

describe('ResgisterCategorySaucerComponent', () => {
  let component: ResgisterCategorySaucerComponent;
  let fixture: ComponentFixture<ResgisterCategorySaucerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResgisterCategorySaucerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResgisterCategorySaucerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
