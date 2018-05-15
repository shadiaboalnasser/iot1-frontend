import {Component, Input, OnInit} from '@angular/core';
import {MenuItem, MenuService} from '../../services/menu.service';

@Component({
  selector: 'fw-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
@Input() item: MenuItem
  constructor(public menuService: MenuService) { }

  ngOnInit() {
  }

}
