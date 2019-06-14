import {Component, OnInit} from '@angular/core';

import {Item, RobotService} from './robot.service';
import {Observable} from 'rxjs';


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

}
