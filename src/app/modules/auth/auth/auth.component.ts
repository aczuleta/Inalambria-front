import { Component, OnInit } from '@angular/core';
import { fade } from '../../../animations/fade.animation';

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  animations: [fade]
})
export class AuthComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
