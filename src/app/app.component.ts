import { Component } from '@angular/core';
import { Classe } from './Classe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'diretivas';

  nomesArray = [];
  nome: Classe = {
    nome: '',
    idade: 0
  };

  addDado(){
    this.nomesArray.push(this.nome) //ADICIONAR O NOME NO ARRAY
  };
}
