import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


export const AuthRoutes: Routes = [
	{
        path: 'auth',
        children: [
            {
                path: 'login',
                component: LoginComponent,
                data: {
                    title: 'Login',
                    urls: [
                        { title: 'Login', url: '/login' },
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
                        { title: 'Register', url: '/register' },
                        { title: 'ngComponent' },
                        { title: 'Register' }
                    ]
                }
            },      
		]
	}
];
