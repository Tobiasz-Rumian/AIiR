import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

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
}
