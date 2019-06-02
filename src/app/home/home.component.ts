import {Component, OnInit} from '@angular/core';
import {Task} from 'app/model/Task';
import {Router} from '@angular/router';
import axios, {AxiosResponse} from "axios";
import {Tasks} from "../model/Tasks";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private router: Router) {
  }

  ngOnInit() {

    axios.get(`${environment.url}/${localStorage.getItem('userName')}/getTasks`).then((response:AxiosResponse<Tasks>)=>{
      this.tasks=response.data.tasks;
    });

    const task1 = {
      id: 1,
      status: 1,
      type: 'Wygenerowany losowo',
      algorithm: 'Mrówkowy',
      date: '12:05 02.05.2019',
      progress: 80
    };
    const task2 = {
      id: 2,
      status: 2,
      type: 'Wygenerowany losowo',
      algorithm: 'Mrówkowy',
      date: '12:05 02.05.2019',
      progress: 30
    };
    const task3 = {
      id: 3,
      status: 3,
      type: 'Wygenerowany losowo',
      algorithm: 'Mrówkowy',
      date: '12:05 02.05.2019',
      progress: 100
    };
    this.tasks.push(task1, task2, task3);
  }


  goToTask(id: number) {
    this.router.navigateByUrl(`task/${id}`);
  }

  createNewTask() {
    this.router.navigateByUrl('/new');
  }

  checkNodeInfo() {
    this.router.navigateByUrl('/info');
  }
}
