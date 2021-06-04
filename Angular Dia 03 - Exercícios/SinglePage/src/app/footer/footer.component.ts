import { Component, OnInit } from '@angular/core';
import {
  faTwitter,
  faFacebookF,
  faInstagram,
  faGooglePlusG,
  faPinterest,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  faTwitter = faTwitter;
  faFacebookF = faFacebookF;
  faInstagram = faInstagram;
  faGooglePlusG = faGooglePlusG;
  faPinterest = faPinterest;

  constructor() {}

  ngOnInit(): void {}
}
