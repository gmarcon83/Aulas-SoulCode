import { Component, OnInit } from '@angular/core';
import {
  faMobile,
  faCode,
  faLifeRing,
  faPencilAlt,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css'],
})
export class FeaturesComponent implements OnInit {
  card1 = {
    icone: faMobile,
    titulo: 'Responsive Design',
    texto:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, quam. Veritatis sapiente eius soluta. Soluta?',
  };
  card2 = {
    icone: faCode,
    titulo: 'Clean Code',
    texto:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, quam. Veritatis sapiente eius soluta. Soluta?',
  };
  card3 = {
    icone: faLifeRing,
    titulo: '24/7 Support',
    texto:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, quam. Veritatis sapiente eius soluta. Soluta?',
  };
  card4 = {
    icone: faPencilAlt,
    titulo: 'Modern Design',
    texto:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, quam. Veritatis sapiente eius soluta. Soluta?',
  };
  constructor() {}

  ngOnInit(): void {}
}
