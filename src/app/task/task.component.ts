import {Component, Input, OnInit} from '@angular/core';
import {Task} from '../model/Task';
import {Router} from '@angular/router';
import axios, {AxiosResponse} from "axios";
import Output from "../model/Output";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;

  constructor(private router: Router) {
  }

  ngOnInit() {
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
    axios.get(`${environment.url}/${localStorage.getItem('userName')}/output/${this.task.id}`).then((response: AxiosResponse<Input>) => {
      //TODO: save response to file
    })
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
    axios.get(`${environment.url}/${localStorage.getItem('userName')}/output/${this.task.id}`).then((response: AxiosResponse<Output>) => {
      //TODO: save response to file
    })
  }
}
