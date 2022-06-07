import { HeroInterface } from './../../models/mediainterfaces';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  public heroInfo: HeroInterface;
  constructor() {
    this.heroInfo = {
      title: "LOS 5 MÁS POPULARES HOY",
      media: [{
        src: '../../../../assets/images/numeros/1.png',
        alt: '1',
        class: "numero"
      },
      {
        src: '../../../../assets/images/Top10/9-poder.webp',
        alt: 'perro',
        class: "imagen"
      },
      {
        src: '../../../../assets/images/numeros/2.png',
        alt: '2',
        class: "numero"
      },
      {
        src: '../../../../assets/images/Top10/7-blacklist.webp',
        alt: 'blacklist',
        class: "imagen"
      },
      {
        src: '../../../../assets/images/numeros/3.png',
        alt: '3',
        class: "numero"
      },
      {
        src: '../../../../assets/images/Top10/1-papel.webp',
        alt: 'papel',
        class: "imagen"
      },
      {
        src: '../../../../assets/images/numeros/4.png',
        alt: '4',
        class: "numero"
      },
      {
        src: '../../../../assets/images/Top10/10-gooddoctor.webp',
        alt: 'doctor',
        class: "imagen"
      },
      {
        src: '../../../../assets/images/numeros/5.png',
        alt: '5',
        class: "numero"
      },
      {
        src: '../../../../assets/images/Top10/5-dondecaben.webp',
        alt: 'donde',
        class: "imagen"
      }


    ]
    }


   }

  ngOnInit(): void {
  }



}
