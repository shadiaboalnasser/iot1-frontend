import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {DataService} from './data.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TagsResolverService implements Resolve<any> {
  constructor(private tagService: DataService) {

  }
  resolve() {
    return this.tagService.getTags()

  }
}
