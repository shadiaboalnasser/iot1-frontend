import { Component, OnInit } from '@angular/core';
import {ITag} from "./tags.model";
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

  tags: ITag[]
  constructor(private route: ActivatedRoute, private service : DataService) { }

  ngOnInit() {
 //   this.tags = this.route.snapshot.data['events'];
    this.service.getTags().subscribe(
      (result:ITag[]) => this.tags = result,
      (err:any) => console.log(err),
      () => console.log('All tags complete')
    )
    console.log(this.tags)

  }

}
