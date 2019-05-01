import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InputProjectComponent } from './pages/input-project/input-project.component';
import { ProjectListItemComponent } from './components/project-list-item/project-list-item.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { LineAuthHandlerComponent } from './components/line-auth-handler/line-auth-handler.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'input-project', component: InputProjectComponent },
  { path: 'project-list', component: ProjectListComponent },
  { path: 'project-list-item', component: ProjectListItemComponent },
  { path: 'line-auth-handler', component: LineAuthHandlerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
