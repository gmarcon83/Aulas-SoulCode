import { Component, OnInit } from '@angular/core';
import {
  faCogs,
  faLifeRing,
  faMagic,
  faRocket,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnInit {
  card1 = {
    icone: faLifeRing,
    titulo: '24/7 Support',
    texto:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, quam. Veritatis sapiente eius soluta. Soluta? Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit.',
  };
  card2 = {
    icone: faRocket,
    titulo: 'Quick Install',
    texto:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, quam. Veritatis sapiente eius soluta. Soluta? Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit.',
  };
  card3 = {
    icone: faCogs,
    titulo: 'Easy to Customize',
    texto:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, quam. Veritatis sapiente eius soluta. Soluta? Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit.',
  };
  card4 = {
    icone: faMagic,
    titulo: 'Another Feature',
    texto:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, quam. Veritatis sapiente eius soluta. Soluta? Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit.',
  };

  constructor() {}

  ngOnInit(): void {}
}
