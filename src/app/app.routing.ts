import { ModuleWithProviders } from '@angular/core';

import { Routes, RouterModule }   from '@angular/router';


import { PropostasComponent } from './propostas/propostas.component';
import { PropostaFormComponent } from './propostas/proposta-form/proposta-form.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: PropostasComponent },
  { path: 'propostas/new', component: PropostaFormComponent},
  { path: 'propostas/:id', component: PropostaFormComponent},
  { path: 'propostas/:id/edit', component: PropostaFormComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);