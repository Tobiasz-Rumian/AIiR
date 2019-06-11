import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CreateRequest} from '../model/CreateRequest';
import axios, {AxiosResponse} from 'axios';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {
  type: string;
  data: string;
  file: any;
  tabuLength: number;
  iterationsWithoutImprovement: number;
  iterationsOfTabu: number;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  goToNodeInfo() {
    this.router.navigateByUrl('/info');
  }

  goHome() {
    this.router.navigateByUrl('/');
  }

  create() {
    let request: CreateRequest;
    console.log(this.type);
    console.log(this.data);
    request = {
      random: this.type === 'random',
      data: this.type === 'random' ? null : this.data,
      login: localStorage.getItem('userName'),
      tabuLength: this.tabuLength,
      iterationsWithoutImprovement: this.iterationsWithoutImprovement,
      iterationsOfTabu: this.iterationsOfTabu
    };
    axios.post(`${environment.url}/create`, request).then((response: AxiosResponse) => {
      console.log(response);
    }, (error => {
      console.log(error);
    }));
  }

  onFileChange(event) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsText(file);

      reader.onload = () => {
        this.data = reader.result;
      };
    }
  }
}
