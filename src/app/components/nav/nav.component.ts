import { Component, OnInit } from '@angular/core';
import { NavigatorInterface } from 'src/app/models/mediainterfaces';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  public navigatorInfo: NavigatorInterface;

  constructor() {
    this.navigatorInfo = {
      logo: {
        src: 'https://1000marcas.net/wp-content/uploads/2020/01/Netflix-Logo-2006.png',
        alt: 'netflixlogo',
        class: "imagen"
      },
      links: [
        {
          text: 'HOME',
          link: '#home',
        },
        {
          text: 'SEARCH',
          link: '#search',
        }],
      }
  }

  ngOnInit(): void {}
}
