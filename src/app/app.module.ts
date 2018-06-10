import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CKEditorModule } from 'ngx-ckeditor';
import { AppComponent } from './app.component';
import { PropostasComponent } from './propostas/propostas.component';

import { routing } from './app.routing';

import { PropostaFormComponent } from './propostas/proposta-form/proposta-form.component';
import { PropostaService } from './propostas/shared/proposta.service';

@NgModule({
  declarations: [
    AppComponent,
    PropostasComponent,
    PropostaFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    CKEditorModule
  ],
  providers: [PropostaService],
  bootstrap: [AppComponent]
})
export class AppModule { }