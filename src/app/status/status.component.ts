import {Component, OnInit} from '@angular/core';
import {Node} from '../model/Node';
import {Router} from '@angular/router';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {
  nodes: Node[] = [];

  constructor(private router:Router) {
  }

  ngOnInit() {
    this.nodes.push({id: 1, status: 1});
    this.nodes.push({id: 2, status: 2});
  }

  goHome() {
    this.router.navigateByUrl('/');
  }

  createNewTask() {
    this.router.navigateByUrl('/new');
  }

  getStatus(node: Node) {
    switch (node.status) {
      case 1:
        return 'Wykonuje zadanie';
      case 2:
        return 'Czeka';
    }
  }

  getColor(node: Node) {
    switch (node.status) {
      case 1:
        return '#059f00';
      case 2:
        return '#ffdd00';
    }
  }
}
