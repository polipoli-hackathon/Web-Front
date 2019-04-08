import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-input-project',
  templateUrl: './input-project.component.html',
  styleUrls: ['./input-project.component.scss']
})
export class InputProjectComponent implements OnInit {

  public plays: string[] = [
    'Soccer', 'BasketBall', 'BaseBall'
  ];
  public hours: number[] = [1, 2, 3, 4, 5];

  public data = {
    playName: '',
    place: '',
    price: 0,
    term: 0,
    startAt: Date
  };

  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit() {
  }

  public post(data): void {
    this.projectService.createProject(data);
  }

}
