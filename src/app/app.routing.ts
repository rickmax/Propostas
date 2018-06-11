import { NgModule } from "@angular/core";
import { ModuleWithProviders } from '@angular/core';

import { Routes, RouterModule }   from '@angular/router';


import { PropostasComponent } from './propostas/propostas.component';
import { PropostaFormComponent } from './propostas/proposta-form/proposta-form.component';
import { PropostaDetalheComponent } from './propostas/proposta-detalhe/proposta-detalhe.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: PropostasComponent },
  { path: 'propostas/new', component: PropostaFormComponent},
  { path: 'propostas/:id', component: PropostaFormComponent},
  { path: 'propostas/:id/edit', component: PropostaFormComponent},
  { path: 'proposta/:id', component: PropostaDetalheComponent},

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);