import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { read } from 'fs';

@Component({
  selector: 'app-project-list-item',
  templateUrl: './project-list-item.component.html',
  styleUrls: ['./project-list-item.component.scss']
})
export class ProjectListItemComponent implements OnInit {
  @Input() readonly placeName: string;
  @Input() readonly playName: string;
  @Input() readonly startAt: Date;
  @Output() join = new EventEmitter();
  @Output() stop = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  apply() {
    this.join.emit();
  }

  cancel() {
    this.stop.emit();
  }

}
