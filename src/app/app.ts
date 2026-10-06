import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Main } from './componentes/main/main';
import { Aside } from './componentes/aside/aside';
import { Footer } from './componentes/footer/footer';
import { Header } from './componentes/header/header';

@Component({
  imports: [RouterOutlet, Header, Main, Aside, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('EvaluacionParcial');
}
