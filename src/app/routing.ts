import { RouterModule, Routes } from '@angular/router';

import { FormvalidationComponent } from './formvalidation/formvalidation.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

export const appRoutes: Routes = [
    { path : '', component: HomeComponent},
    { path : 'Login', component: LoginComponent},
    { path : 'Register', component : FormvalidationComponent}
];