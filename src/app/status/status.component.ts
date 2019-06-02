import {Component, OnInit} from '@angular/core';
import {Node} from '../model/Node';
import {Router} from '@angular/router';
import axios, {AxiosResponse} from 'axios';
import NodeInfo from '../model/NodeInfo';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {
  nodes: Node[] = [];

  constructor(private router: Router) {
  }

  ngOnInit() {

    axios.get(`${environment.url}/nodeInfo`).then((response: AxiosResponse<NodeInfo>) => {
      this.nodes = response.data.nodes;
    });
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
