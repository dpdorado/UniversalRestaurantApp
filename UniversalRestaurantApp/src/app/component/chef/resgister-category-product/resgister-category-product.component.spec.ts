import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResgisterCategoryProductComponent } from './resgister-category-product.component';

describe('ResgisterCategoryProductComponent', () => {
  let component: ResgisterCategoryProductComponent;
  let fixture: ComponentFixture<ResgisterCategoryProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResgisterCategoryProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResgisterCategoryProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
