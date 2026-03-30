import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  requisicao=[
    {
      tecnologia:'HTML',
      descricao:'HTML (abreviação de HyperText Markup Language, ou Linguagem de Marcação de Hipertexto) é a linguagem padrão utilizada para criar e estruturar o conteúdo de páginas na internet.'
    },
    {
      tecnologia:'CSS',
      descricao:'CSS (Cascading Style Sheets, ou Folhas de Estilo em Cascata) é uma linguagem de estilo utilizada para definir a aparência visual de documentos HTML.'
    },
    {
      tecnologia:'JavaScript',
      descricao:'JavaScript é uma linguagem de programação interpretada de alto nível, essencial para criar interatividade e dinamismo em páginas web.'
    }
  ];

}
