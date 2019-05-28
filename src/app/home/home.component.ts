import {Component, OnInit} from '@angular/core';
import {Task} from 'app/model/Task';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tasks: Task[] = [];

  constructor() {
  }

  ngOnInit() {
    const task1 = {
      status: 1,
      type: 'Wygenerowany losowo',
      algorithm: 'Mrówkowy',
      date: '12:05 02.05.2019',
      progress: 80
    };
    const task2 = {
      status: 2,
      type: 'Wygenerowany losowo',
      algorithm: 'Mrówkowy',
      date: '12:05 02.05.2019',
      progress: 30
    };
    const task3 = {
      status: 3,
      type: 'Wygenerowany losowo',
      algorithm: 'Mrówkowy',
      date: '12:05 02.05.2019',
      progress: 100
    };
    this.tasks.push(task1, task2, task3);
  }


}
