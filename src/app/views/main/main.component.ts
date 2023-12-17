import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { dashboardOptions } from '../../../assets/config';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  options: MenuItem[] = dashboardOptions;
  // TODO speedDialOpen DIRECTIVE
  speedDialOpen$ = new BehaviorSubject(false);

  constructor() {}

  ngOnInit(): void {}

  onToggleSpeedDial(isOpen: boolean) {
    this.speedDialOpen$.next(isOpen);
  }
}
