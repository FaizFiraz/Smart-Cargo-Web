import { GaurdService } from './services/gaurd.service';
import { AuthService } from './services/auth.service';
import { AdminDashboardComponent } from './pages/main-content/admin/admin-dashboard/admin-dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ServerErrorPageComponent } from './pages/server-error-page/server-error-page.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { DriverManagementComponent } from './pages/main-content/admin/driver-management/driver-management.component';
import { AdminComponent } from './pages/main-content/admin/admin.component';

//import ng-bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ForgotPasswordPageComponent } from './pages/forgot-password-page/forgot-password-page.component';
import { JwtModule } from '@auth0/angular-jwt';

//function to get jwt-token from the localstorage
export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    NotFoundPageComponent,
    ServerErrorPageComponent,
    SideBarComponent,
    AdminDashboardComponent,
    NavBarComponent,
    DriverManagementComponent,
    AdminComponent,
    ForgotPasswordPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
      },
    }),
  ],
  providers: [AuthService,GaurdService],
  bootstrap: [AppComponent],
})
export class AppModule {}