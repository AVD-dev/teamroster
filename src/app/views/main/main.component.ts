import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { dashboardOptions } from '../../../assets/config';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  options: MenuItem[] = dashboardOptions;

  constructor() {}

  ngOnInit(): void {}
}
