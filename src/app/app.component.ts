import { MediaInterface } from './models/mediainterfaces';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public Anime: MediaInterface = {
    title: 'ANIME',
    media: [
      {
        src: '../../../../assets/images/Anime/perfectblue.webp',
        alt: 'perfectblue',
        class: "imagen"
      },
      {
        src: '../../../../assets/images/Anime/mononoke.webp',
        alt: 'mononoke',
        class: "imagen"
      },
      {
        src: '../../../../assets/images/Anime/castilloambulante.webp',
        alt: 'castilloambulante',
        class: "imagen"
      },
      {
        src: '../../../../assets/images/Anime/evangelion.webp',
        alt: 'evangelion',
        class: "imagen"
      },
      {
        src: '../../../../assets/images/Anime/ninokuni.jpg',
        alt: 'ninokuni',
        class: "imagen"
      },
      {
        src: '../../../../assets/images/Anime/chihiro.webp',
        alt: 'chihiro',
        class: "imagen"
      },
    ],
  };

  public SciFi: MediaInterface = {
    title: 'SCI-FI',
    media: [
      {
        src: '../../../../assets/images/Sci-fi/startrek.webp',
        alt: 'startrek',
        class: "imagen"
      },
      {
        src: '../../../../assets/images/Sci-fi/watchmen.webp',
        alt: 'watchmen',
        class: "imagen"
      },
      {
        src: '../../../../assets/images/Sci-fi/passengers.webp',
        alt: 'passengers',
        class: "imagen"
      },
      {
        src: '../../../../assets/images/Sci-fi/gits.webp',
        alt: 'gits',
        class: "imagen"
      },
      {
        src: '../../../../assets/images/Sci-fi/12monos.webp',
        alt: '12monos',
        class: "imagen"
      },
      {
        src: '../../../../assets/images/Sci-fi/6dia.webp',
        alt: '6dia',
        class: "imagen"
      },
    ],
  };
  public Drama: MediaInterface = {
    title: 'DRAMA',
    media: [
      {
        src: '../../../../assets/images/Drama/clublucha.webp',
        alt: 'clublucha',
        class: "imagen"
      },
      {
        src: '../../../../assets/images/Drama/1917.webp',
        alt: '1917',
        class: "imagen"
      },
      {
        src: '../../../../assets/images/Drama/arrival.webp',
        alt: 'arrival',
        class: "imagen"
      },
      {
        src: '../../../../assets/images/Drama/culpable.jpg',
        alt: 'culpable',
        class: "imagen"
      },
      {
        src: '../../../../assets/images/Drama/sombradiablo.webp',
        alt: 'sombradiablo',
        class: "imagen"
      },
      {
        src: '../../../../assets/images/Drama/scarface.webp',
        alt: 'scarface',
        class: "imagen"
      },
    ],
  };
  public Terror: MediaInterface = {
    title: 'TERROR',
    media: [
      {
        src: '../../../../assets/images/Terror/malasana.webp',
        alt: 'malasaña',
        class: "imagen"
      },
      {
        src: '../../../../assets/images/Terror/calleterror.jpg',
        alt: 'calleterror',
        class: "imagen"
      },
      {
        src: '../../../../assets/images/Terror/insidious2.webp',
        alt: 'insidious2',
        class: "imagen"
      },
      {
        src: '../../../../assets/images/Terror/apostol.jpg',
        alt: 'apostol',
        class: "imagen"
      },
      {
        src: '../../../../assets/images/Terror/infiernoagua.webp',
        alt: 'infiernoagua',
        class: "imagen"
      },
      {
        src: '../../../../assets/images/Terror/multiple.webp',
        alt: 'multiple',
        class: "imagen"
      },
    ],
  };
  public Accion: MediaInterface = {
    title: 'ACCIÓN',
    media: [
      {
        src: '../../../../assets/images/Accion/terminator2.webp',
        alt: 'terminator2',
        class: "imagen"
      },
      {
        src: '../../../../assets/images/Accion/killbill2.webp',
        alt: 'killbill2',
        class: "imagen"
      },
      {
        src: '../../../../assets/images/Accion/renacido.webp',
        alt: 'renacido',
        class: "imagen"
      },
      {
        src: '../../../../assets/images/Accion/elprotector.webp',
        alt: 'elprotector',
        class: "imagen"
      },
      {
        src: '../../../../assets/images/Accion/johnwick2.webp',
        alt: 'johnwick2',
        class: "imagen"
      },
      {
        src: '../../../../assets/images/Accion/heat.webp',
        alt: 'heat',
        class: "imagen"
      },
    ],
  };
  public Comedia: MediaInterface = {
    title: 'COMEDIA',
    media: [
      {
        src: '../../../../assets/images/Comedia/regresofuturo.webp',
        alt: 'regresofuturo',
        class: "imagen"
      },
      {
        src: '../../../../assets/images/Comedia/dictador.webp',
        alt: 'dictador',
        class: "imagen"
      },
      {
        src: '../../../../assets/images/Comedia/erasehollywood.webp',
        alt: 'erasehollywood',
        class: "imagen"
      },
      {
        src: '../../../../assets/images/Comedia/cazafantasmas.webp',
        alt: 'cazafantasmas',
        class: "imagen"
      },
      {
        src: '../../../../assets/images/Comedia/rickandmorty.webp',
        alt: 'rickandmorty',
        class: "imagen"
      },
      {
        src: '../../../../assets/images/Comedia/scarymovie3.webp',
        alt: 'scarymovie3',
        class: "imagen"
      },
    ],
  };
  
}
