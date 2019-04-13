import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  public projects$ = this.projectService.projects$;

  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    this.load();
  }

  private load() {
    this.projectService.loadProjects();
  }

  entry(data: Project): void {
    this.projectService.entryProject(data);
  }

  cancel(data: Project): void {
    this.projectService.cancelProject(data);
  }

}
