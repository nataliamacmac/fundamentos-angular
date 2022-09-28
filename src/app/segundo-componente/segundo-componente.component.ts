import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
  nome = "Natalia";
  dataNascimento = "1990-08-19";
  urlImagem = "/assets/natalia.jpeg";

  mostrarDataNascimento() {
    alert(`A data de nascimento da Natália é: ${this.dataNascimento}`);
  }
}
