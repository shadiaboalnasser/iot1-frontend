import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title = 'IOT';
  tags: any;
  constructor(
    private tagService: DataService, private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // this.tags = this.tagService.getTagById(1);
    this.tags = this.route.snapshot.data['tags'];
  }

}
