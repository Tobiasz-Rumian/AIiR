import {Component, Input, OnInit} from '@angular/core';
import {Task} from 'app/model/Task';

@Component({
  selector: 'app-task-info',
  templateUrl: './task-info.component.html',
  styleUrls: ['./task-info.component.scss']
})
export class TaskInfoComponent implements OnInit {
  @Input() task: Task;

  constructor() {
  }

  ngOnInit() {
  }

  getProgress() {
    return String(this.task.progress);
  }

  getColor() {
    switch (this.task.status) {
      case 1:
        return '#059f00';
      case 2:
        return '#ffdd00';
      case 3:
        return '#c5c5c5';
    }
  }

  getStatus(): string {
    switch (this.task.status) {
      case 1:
        return 'W trakcie wykonywania';
      case 2:
        return 'Oczekuje w kolejce';
      case 3:
        return 'Wykonany';
    }
  }
}
