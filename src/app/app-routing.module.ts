import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { ProcurementComponent } from './dashbord/procurement/procurement.component';
import { ResourcesComponent } from './dashbord/resources/resources.component';
import { ProfibilityComponent } from './dashbord/profibility/profibility.component';
import { ItspendComponent } from './dashbord/itspend/itspend.component';
import { SaleComponent } from './dashbord/sale/sale.component';
import { RetailComponent } from './dashbord/retail/retail.component';
const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "Login", component: LoginComponent },
  { path: "Dashbord", component: DashbordComponent },
  { path: "Procurement", component: ProcurementComponent },
  { path: "Resources", component: ResourcesComponent },
  { path: "Profibility", component: ProfibilityComponent },
  { path: "Itspend", component: ItspendComponent },
  { path: "Sale", component: SaleComponent },
  { path: "Retail", component: RetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
