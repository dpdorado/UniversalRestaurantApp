import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ComponentsRoutes } from './component.routing';
import { NgbdpregressbarBasicComponent } from './progressbar/progressbar.component';
import { NgbdpaginationBasicComponent } from './pagination/pagination.component';
import { NgbdAccordionBasicComponent } from './accordion/accordion.component';
import { NgbdAlertBasicComponent } from './alert/alert.component';
import { NgbdCarouselBasicComponent } from './carousel/carousel.component';
import { NgbdDatepickerBasicComponent } from './datepicker/datepicker.component';
import { NgbdDropdownBasicComponent } from './dropdown-collapse/dropdown-collapse.component';
import { NgbdModalBasicComponent } from './modal/modal.component';
import { NgbdPopTooltipComponent } from './popover-tooltip/popover-tooltip.component';
import { NgbdratingBasicComponent } from './rating/rating.component';
import { NgbdtabsBasicComponent } from './tabs/tabs.component';
import { NgbdtimepickerBasicComponent } from './timepicker/timepicker.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './card/card.component';
import { ToastComponent } from './toast/toast.component';
import { ToastsContainer } from './toast/toast-container';
import { RestaurantListComponent } from './user/restaurant-list/restaurant-list.component';
import { SaucerRegisterComponent } from './chef/saucer-register/saucer-register.component';
import { RestaurantRegisterComponent } from './admin/restaurant-register/restaurant-register.component';
import { ARestaurantListComponent } from './admin/a-restaurant-list/a-restaurant-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './chef/home/home.component';
import { ResgisterCategoryProductComponent } from './chef/resgister-category-product/resgister-category-product.component';
import { ResgisterCategorySaucerComponent } from './chef/resgister-category-saucer/resgister-category-saucer.component';
import { RegisterProductComponent } from './chef/register-product/register-product.component';
import { SaucerListComponent } from './user/saucer-list/saucer-list.component';
import { ProductListComponent } from './user/product-list/product-list.component';
import { ListBuyComponent } from './user/list-buy/list-buy.component';
import { SaucerEditComponent } from './user/saucer-edit/saucer-edit.component';
import { ShoppingCartListComponent } from './cart/shopping-cart-list/shopping-cart-list.component';
import { BillComponent } from './cart/bill/bill.component';
import { WeeklySaucersComponent } from './weekly/weekly-saucers/weekly-saucers.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  declarations: [
    NgbdpregressbarBasicComponent,
    NgbdpaginationBasicComponent,
    NgbdAccordionBasicComponent,
    NgbdAlertBasicComponent,
    NgbdCarouselBasicComponent,
    NgbdDatepickerBasicComponent,
    NgbdDropdownBasicComponent,
    NgbdModalBasicComponent,
    NgbdPopTooltipComponent,
    NgbdratingBasicComponent,
    NgbdtabsBasicComponent,
    NgbdtimepickerBasicComponent,
    ButtonsComponent,
    CardsComponent,
    ToastComponent,
    ToastsContainer,
    RestaurantListComponent,
    SaucerRegisterComponent,
    RestaurantRegisterComponent,
    ARestaurantListComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ResgisterCategoryProductComponent,
    ResgisterCategorySaucerComponent,
    RegisterProductComponent,
    SaucerListComponent,
    ProductListComponent,
    ListBuyComponent,
    SaucerEditComponent,
    ShoppingCartListComponent,
    BillComponent,
    WeeklySaucersComponent,
  ]
})
export class ComponentsModule {}
