import { Component, OnInit } from '@angular/core';

import { PropostaService } from './shared/proposta.service';

import {Proposta} from "./shared/proposta.model";

@Component({
  selector: 'app-propostas',
  templateUrl: './propostas.component.html',
  styleUrls: ['./propostas.component.css']
})
export class PropostasComponent implements OnInit {

  private propostas: Proposta[] = [];

  constructor(private propostaService: PropostaService) { }

  ngOnInit() {
    this.propostaService.getPropostas()
      .subscribe(data => this.propostas = data);
  }

  deleteProposta(propostas) {
    if (confirm("Você tem certeza que quer deletar a proposta: " + propostas.nome + "?")) {
      var index = this.propostas.indexOf(propostas);
      this.propostas.splice(index, 1);

      this.propostaService.deleteProposta(propostas.id)
        .subscribe(null);
    }
  }

}