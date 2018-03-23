import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { GroupFormComponent } from './group-form/group-form.component';
import { PassengerFormComponent } from './passenger-form/passenger-form.component';
import { GroupsListComponent } from './groups-list/groups-list.component';
import { PassengersListComponent } from './passengers-list/passengers-list.component';
import { UpdateGroupComponent } from './update-group/update-group.component';
import { UpdatePassengerComponent } from './update-passenger/update-passenger.component';

const routes: Routes = [
  { path: 'group-form', component: GroupFormComponent },
  { path: 'passenger-form', component: PassengerFormComponent },
  { path: 'groups-list', component: GroupsListComponent },
  { path: 'passengers-list', component: PassengersListComponent },
  { path: 'update-group', component: UpdateGroupComponent },
  { path: 'update-passenger', component: UpdatePassengerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const RoutingComponents = [GroupFormComponent, PassengerFormComponent, GroupsListComponent, PassengersListComponent, UpdateGroupComponent, UpdatePassengerComponent];
