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
  public projects$: Observable<Project[]>;

  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    this.get();
  }

  private get(): Observable<Project[]> {
    this.projects$ = this.projectService.getProjects();
    return this.projects$;
  }

  apply(data: Project): void {
    this.projectService.applyProject(data);
  }

  cancel(data: Project): void {
    this.projectService.cancelProject(data);
  }

}
