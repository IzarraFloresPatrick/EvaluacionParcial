import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Main } from './componentes/main/main';
import { Footer } from './componentes/footer/footer';
import { Header } from './componentes/header/header';

@Component({
  imports: [RouterOutlet, Header, Main, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('EvaluacionParcial');
}
