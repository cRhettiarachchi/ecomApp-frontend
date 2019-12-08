import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeaderComponent } from './landing-page/header/header.component';
import { AllProductsComponent } from './landing-page/all-products/all-products.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatBadgeModule, MatButtonModule,
  MatCardModule, MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatMenuModule,
  MatSelectModule,
  MatToolbarModule
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import { SidePanelComponent } from './dashboard/side-panel/side-panel.component';
import { CreateProductsComponent } from './dashboard/create-products/create-products.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { SignInComponent } from './authentication/sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderComponent,
    AllProductsComponent,
    SidePanelComponent,
    CreateProductsComponent,
    DashboardComponent,
    FooterComponent,
    SignUpComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatBadgeModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatMenuModule,
    FormsModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
