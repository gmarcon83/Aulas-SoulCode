import { Component, OnInit } from '@angular/core';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-install',
  templateUrl: './install.component.html',
  styleUrls: ['./install.component.css'],
})
export class InstallComponent implements OnInit {
  faRocket = faRocket;
  constructor() {}

  ngOnInit(): void {}
}
