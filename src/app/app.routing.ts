//importar modulos del router de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//IMPORTAR COMPONENTES
import { HomeComponent } from './home/home.component';
import { DeberesComponent } from './deberes/deberes.component';


//Array de rutas
const appRoutes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'home', component: HomeComponent},
	{path: 'deberes', component: DeberesComponent },
	{path: '**', component: HomeComponent}
];

//exportar el modulo del router
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

