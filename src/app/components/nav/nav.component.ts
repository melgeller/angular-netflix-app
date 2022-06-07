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
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Netflix-new-icon.png/768px-Netflix-new-icon.png',
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
