import {NgModule} from '@angular/core';
import {AuthService} from './shared/services/auth.module';

import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/services/shared-module.service';

import {AdminLayoteComponent} from './shared/components/admin-layote/admin-layote.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CreatePageComponent} from './create-page/create-page.component';
import {EditPageComponent} from './edit-page/edit-page.component';

@NgModule({
  declarations: [
    AdminLayoteComponent,
    LoginPageComponent,
    DashboardComponent,
    CreatePageComponent,
    EditPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '', component: AdminLayoteComponent, children: [
          {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
          {path: 'login', component: LoginPageComponent},
          {path: 'create', component: CreatePageComponent},
          {path: 'dashboard', component: DashboardComponent},
          {path: 'post/:id/edit', component: EditPageComponent},
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthService
  ]
})
export class AdminModule {

}
