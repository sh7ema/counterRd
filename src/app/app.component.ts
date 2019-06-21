import {Component, OnInit} from '@angular/core';

import { RobotServise } from './robot.servise';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  robotItem;
  constructor(private robotSevise: RobotServise) {}

  ngOnInit() {
    this.robotItem = this.robotSevise.getRobot();
  }

}
