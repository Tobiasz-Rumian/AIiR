import {Component, OnInit} from '@angular/core';
import {Task} from '../model/Task';
import {Router} from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  private task: Task;

  constructor(private router:Router) {
  }

  ngOnInit() {
    this.task = {
      id: 1,
      status: 1,
      type: 'Wygenerowany losowo',
      algorithm: 'Mrówkowy',
      date: '12:05 02.05.2019',
      progress: 80
    };
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

  getStatus() {
    switch (this.task.status) {
      case 1:
        return 'W trakcie wykonywania';
      case 2:
        return 'Oczekuje w kolejce';
      case 3:
        return 'Wykonany';
    }
  }

  downloadInputData() {
    // TODO: Download input data
  }

  goHome() {
    this.router.navigateByUrl('/');
  }

  createNewTask() {
    this.router.navigateByUrl('/new');
  }

  goToNodeInfo() {
    this.router.navigateByUrl('/info');
  }

  downloadOutputData() {
    // TODO: Download output data
  }
}
