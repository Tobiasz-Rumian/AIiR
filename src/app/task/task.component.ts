import {Component, OnInit} from '@angular/core';
import {Task} from '../model/Task';
import {ActivatedRoute, Router} from '@angular/router';
import axios, {AxiosResponse} from 'axios';
import Output from '../model/Output';
import {environment} from '../../environments/environment';
import {Tasks} from '../model/Tasks';
import {Input} from '../model/Input';
import {saveAs} from 'file-saver';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  task: Task = new Task();

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      axios.get(`${environment.url}/${localStorage.getItem('userName')}/tasks`).then((response: AxiosResponse<Tasks>) => {
        this.task = response.data.tasks.find((task: Task) => task.id === id);
      });
    });
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
      this.saveToFile(response.data.data, 'input.txt');
    });
  }

  saveToFile(data: string, fileName: string) {
    const blob = new Blob([data], {type: 'text/plain;charset=utf-8'});
    saveAs(blob, fileName);
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
      this.saveToFile(response.data.data, 'output.txt');
    });
  }
}
