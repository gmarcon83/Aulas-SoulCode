import { Component, OnInit, Input } from '@angular/core';
import { faAd } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css'],
})
export class FeatureComponent implements OnInit {
  @Input() card = { icone: faAd, titulo: '', texto: '' };

  constructor() {}

  ngOnInit(): void {}
}
