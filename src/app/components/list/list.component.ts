import { Component } from '@angular/core';
import { playersList } from '../../../assets/config';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  players = playersList;
  constructor() {}
}
