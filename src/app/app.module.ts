import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
 import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashbordComponent } from './dashbord/dashbord.component';
import { ProcurementComponent } from './dashbord/procurement/procurement.component';
import { ResourcesComponent } from './dashbord/resources/resources.component';
import { ProfibilityComponent } from './dashbord/profibility/profibility.component';
import { ItspendComponent } from './dashbord/itspend/itspend.component';
import { SaleComponent } from './dashbord/sale/sale.component';
import { RetailComponent } from './dashbord/retail/retail.component';
import { HighchartsChartComponent } from 'highcharts-angular';
import { ChartModule } from 'angular-highcharts';

import { SidebarComponent } from './sidebar/sidebar.component';





@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HeaderComponent,
    LoginComponent,
    DashbordComponent,
    ProcurementComponent,
    ResourcesComponent,
    ProfibilityComponent,
    ItspendComponent,
    SaleComponent,
    RetailComponent,
    HighchartsChartComponent,
    SidebarComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ChartModule
   
    
   
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
