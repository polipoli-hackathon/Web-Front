import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-project',
  templateUrl: './input-project.component.html',
  styleUrls: ['./input-project.component.scss']
})
export class InputProjectComponent implements OnInit {
  public projectForm = new FormGroup({
    playName: new FormControl(''),
    hour: new FormControl(''),
    term: new FormControl(''),
    placeName: new FormControl(''),
    price: new FormControl('')
  });


  public minDate = new Date(2000, 0, 1);
  public maxDate = new Date(2020, 0, 1);
  public plays: string[] = [
    'Soccer', 'BasketBall', 'BaseBall'
  ];
  public hours: string[] = ['1', '2', '3', '4', '5'];
  public birthday = new Date(1985, 3, 1);

  constructor(
    private projectService: ProjectService,
    private formBuilder: FormBuilder
  ) {
    this.projectForm = this.formBuilder.group({});
  }

  ngOnInit() {
  }


  public post(data): void {
    this.projectService.addProject(data);
  }

}
