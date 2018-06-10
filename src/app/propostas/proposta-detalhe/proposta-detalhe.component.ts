import { Component, OnInit } from '@angular/core';

import { PropostaService } from '../shared/proposta.service';
import {Proposta} from "../shared/proposta.model";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-proposta-detalhe',
  templateUrl: './proposta-detalhe.component.html',
  styleUrls: ['./proposta-detalhe.component.css']
})
export class PropostaDetalheComponent implements OnInit {

  proposta: Proposta = new Proposta();

  constructor(
    private propostaService: PropostaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      this.propostaService.getProposta(id)
        .subscribe(
          proposta => this.proposta = proposta,
          response => {});
    });
  }
}
