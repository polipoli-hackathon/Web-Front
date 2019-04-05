import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { mergeMap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {
  private _projects$: BehaviorSubject<Project[]>;
  private projects$: Observable<Project[]>;

  constructor(
    private db: AngularFirestore
  ) {
    this._projects$ = new BehaviorSubject([]);
  }

  private async updateEvent(project: Project, state: string) {
    await this.db.collection<Project>('projects')
      .doc(project.id)
      .update({ state: state })
      .then(() => {
        this.fetchEvents();
    });
  }

  private fetchEvents(): Observable<Project[]> {
    return this.db.collection<Project>('projects').valueChanges().pipe(
      mergeMap(data => {
        this._projects$.next(data);
        this.projects$ = this._projects$.asObservable();
        return this.projects$;
      })
    );
  }

  getProjects(): Observable<Project[]> {
    return this.projects$ || this.fetchEvents();
  }

  async createProject(data: Project) {
    await this.db.collection<Project>('projects').add(data);
  }

  cancelProject(data: Project): void {
    this.updateEvent(data, 'cancel');
  }

  joinProject(data: Project): void {
    this.updateEvent(data, 'join');
  }

}
