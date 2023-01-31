import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.sass']
})
export class SidebarMenuComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<boolean>();
  
  noticiaOn: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  noticiaMethod() {
    this.noticiaOn ? this.noticiaOn = false : this.noticiaOn = true;
    this.newItemEvent.emit(this.noticiaOn);
  }

}
