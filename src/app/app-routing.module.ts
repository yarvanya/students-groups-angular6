import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { GroupsComponent } from './groups/groups.component';

const routes: Routes = [
  { path: 'students', component: StudentsComponent },
  { path: 'groups', component: GroupsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true, initialNavigation: true})
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
export const routingComponents = [StudentsComponent, GroupsComponent];
