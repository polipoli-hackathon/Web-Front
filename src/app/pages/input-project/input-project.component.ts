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

  private data = {
    playName: '',
    place: '',
    price: 0,
  };

  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit() {
  }

  private post(data): void {
    this.projectService.createProject(data);
  }

}
