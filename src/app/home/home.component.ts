import {Component, OnInit} from '@angular/core';
import {Task} from 'app/model/Task';
import {Router} from '@angular/router';
import axios, {AxiosResponse} from 'axios';
import {Tasks} from '../model/Tasks';
import {environment} from '../../environments/environment';

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
    axios.get(`${environment.url}/${localStorage.getItem('userName')}/tasks`).then((response: AxiosResponse<Tasks>) => {
      console.log(response);
      this.tasks = response.data.tasks;
    });
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
