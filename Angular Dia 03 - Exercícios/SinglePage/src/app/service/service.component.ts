import { Component, OnInit, Input } from '@angular/core';
import { faAd } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
})
export class ServiceComponent implements OnInit {
  @Input() card = { icone: faAd, titulo: '', texto: '' };

  constructor() {}

  ngOnInit(): void {}
}
