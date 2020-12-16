import { Routes } from '@angular/router';

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
import { RestaurantListComponent } from './user/restaurant-list/restaurant-list.component';
import { SaucerRegisterComponent } from './chef/saucer-register/saucer-register.component';
import { RestaurantRegisterComponent } from './admin/restaurant-register/restaurant-register.component';
import { ARestaurantListComponent } from './admin/a-restaurant-list/a-restaurant-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './chef/home/home.component';
import { RegisterProductComponent } from './chef/register-product/register-product.component';
import { ResgisterCategoryProductComponent } from './chef/resgister-category-product/resgister-category-product.component';
import { ResgisterCategorySaucerComponent } from './chef/resgister-category-saucer/resgister-category-saucer.component';
import { ListBuyComponent } from './user/list-buy/list-buy.component';
import { SaucerEditComponent } from './user/saucer-edit/saucer-edit.component';
import { ShoppingCartListComponent } from './cart/shopping-cart-list/shopping-cart-list.component';
import { BillComponent } from './cart/bill/bill.component';
import { WeeklySaucersComponent } from './weekly/weekly-saucers/weekly-saucers.component';
export const ComponentsRoutes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'progressbar',
				component: NgbdpregressbarBasicComponent,
				data: {
					title: 'Progressbar',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Progressbar' }
					]
				}
			},
			{
				path: 'login',
				component: LoginComponent,
				data: {
					title: 'Login',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Login' }
					]
				}
			},
			{
				path: 'register',
				component: RegisterComponent,
				data: {
					title: 'Register',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Register' }
					]
				}
			},
			{
				path: 'cart/shopping-cart-list',
				component: ShoppingCartListComponent,
				data: {
					title: 'Listado de compras',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Listado de compras' }
					]
				}
			},	
			{				
				path: 'cart/bill',
				component: BillComponent,
				data: {
					title: 'Bill',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Bill' }
					]
				}
			},					
			{				
				path: 'weekly/weekly-saucer',
				component: WeeklySaucersComponent,
				data: {
					title: 'Semanario',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Semanario' }
					]
				}
			},				
			{
				
				path: 'user/list-buy/:id',
				component: ListBuyComponent,
				data: {
					title: 'Lista de productos y platos',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Lista de productos y platos' }
					]
				}
			},		
			{
				path: 'user/saucer-edit/:id_r/:id_s',
				component: SaucerEditComponent,
				data: {
					title: 'Personalizar plato',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'vPersonalizar plato' }
					]
				}
			},					
			{
				path: 'user/restaurants',
				component: RestaurantListComponent,
				data: {
					title: 'Restaurants',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Restaurants' }
					]
				}
			},
			{
				path: 'chef/home',
				component: HomeComponent,
				data: {
					title: 'Home chef',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'home chef' }
					]
				}
			},
			{
				path: 'chef/register-product',
				component: RegisterProductComponent,
				data: {
					title: 'Product register',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Product register' }
					]
				}
			},
			{
				path: 'chef/saucer-register',
				component: SaucerRegisterComponent,
				data: {
					title: 'Saucer register',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Saucer register' }
					]
				}
			},
			{
				path: 'chef/register-category-product',
				component: ResgisterCategoryProductComponent,
				data: {
					title: 'Product category register',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Product category register' }
					]
				}
			},
			{
				path: 'chef/register-category-saucer',
				component: ResgisterCategorySaucerComponent,
				data: {
					title: 'Saucer category register',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Saucer category register' }
					]
				}
			},
			{
				path: 'admin/restaurant-register',
				component: RestaurantRegisterComponent,
				data: {
					title: 'Restaurant register',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Restaurant register' }
					]
				}
			},
			{
				path: 'admin/a-restaurant-list',
				component: ARestaurantListComponent,
				data: {
					title: 'A-Restaurants',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'A-Restaurants' }
					]
				}
			},
			{
				path: 'card',
				component: CardsComponent,
				data: {
					title: 'Cards',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Cards' }
					]
				}
			},
			{
				path: 'pagination',
				component: NgbdpaginationBasicComponent,
				data: {
					title: 'Pagination',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Pagination' }
					]
				}
			},
			{
				path: 'accordion',
				component: NgbdAccordionBasicComponent,
				data: {
					title: 'Accordion',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Accordion' }
					]
				}
			},
			{
				path: 'alert',
				component: NgbdAlertBasicComponent,
				data: {
					title: 'Alert',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Alert' }
					]
				}
			},
			{
				path: 'carousel',
				component: NgbdCarouselBasicComponent,
				data: {
					title: 'Carousel',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Carousel' }
					]
				}
			},
			{
				path: 'datepicker',
				component: NgbdDatepickerBasicComponent,
				data: {
					title: 'Datepicker',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Datepicker' }
					]
				}
			},
			{
				path: 'dropdown',
				component: NgbdDropdownBasicComponent,
				data: {
					title: 'Dropdown',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Dropdown' }
					]
				}
			},
			{
				path: 'modal',
				component: NgbdModalBasicComponent,
				data: {
					title: 'Modal',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Modal' }
					]
				}
			},
			{
				path: 'poptool',
				component: NgbdPopTooltipComponent,
				data: {
					title: 'Popover & Tooltip',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Popover & Tooltip' }
					]
				}
			},
			{
				path: 'rating',
				component: NgbdratingBasicComponent,
				data: {
					title: 'Rating',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Rating' }
					]
				}
			},
			{
				path: 'tabs',
				component: NgbdtabsBasicComponent,
				data: {
					title: 'Tabs',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Tabs' }
					]
				}
			},
			{
				path: 'timepicker',
				component: NgbdtimepickerBasicComponent,
				data: {
					title: 'Timepicker',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Timepicker' }
					]
				}
			},
			{
				path: 'buttons',
				component: ButtonsComponent,
				data: {
					title: 'Button',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Button' }
					]
				}
			},
			{
				path: 'toast',
				component: ToastComponent,
				data: {
					title: 'Toast',
				}
			}
		]
	}
];
