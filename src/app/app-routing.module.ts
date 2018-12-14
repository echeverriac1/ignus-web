import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './landing/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  { path: '', component: LayoutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contacto', component: ContactComponent },
  // { path: 'catalogo', component: CatalogComponent},
  { path: 'nosotros', component: AboutComponent },
  // { path: 'property/id', component: PropertyComponent },
  { path: 'suscribir', component: RegisterComponent },
];


@NgModule({
  imports: [
    RouterModule.forRoot( routes, { useHash: true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
