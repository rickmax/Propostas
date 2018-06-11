import { Injectable } from '@angular/core';
import { Estado } from './estado.model';
import { Cidade } from './cidade.model'


@Injectable()
export class DataserviceService {

getEstados() {
    return [
     new Estado( 1, 'Minas Gerais' ),
     new Estado( 2, 'São Paulo' ),
     new Estado( 3, 'Rio de Janeiro' )
    ];
  }

   getCidades() {
   return [
     new Cidade(1, 1, 'Belo Horizonte' ),
     new Cidade(2, 1, 'Betim' ),
     new Cidade(3, 1, 'Contagem'),
     new Cidade(5, 2, 'São Paulo' ),
     new Cidade(6, 2, 'Santos'),
     new Cidade(7, 2, 'Suzano' ),
     new Cidade(8, 3, 'Rio de Janeiro' ),
     new Cidade(9, 3, 'Volta Redonda' ),
     new Cidade(10, 3, 'Cabo Frio')
    ];
  }
  constructor() { }
}