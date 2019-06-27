import {Component, OnInit} from '@angular/core';

import {Item, RobotService} from './robot.service';
import {from, Observable} from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  robotItem: Observable<Item>;

  constructor(private robotSevise: RobotService) {
    this.robotItem = this.robotSevise.getRobot();
  }

  ngOnInit() {
  }

  setName() {
    void this.robotSevise.setName(123123);
  }

  setRobot() {
    return this.robotSevise.addRobot();
  }

}
