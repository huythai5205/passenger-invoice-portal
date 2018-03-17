import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { GroupsListComponent } from '../groups-list/groups-list.component';

@Component({
  selector: 'ht-passengers-list',
  templateUrl: './passengers-list.component.html',
  styleUrls: ['./passengers-list.component.css']
})

export class PassengersListComponent implements OnInit {

  public group;

  constructor(private httpClient: HttpClient, private groupsList: GroupsListComponent) { }

  ngOnInit() {
    //TODO: change http://localhost:3000/api/passengers to ./api/passengers 
    this.httpClient.get('http://localhost:3000/api/passengers' + this.groupsList.groupId).subscribe((data) => {
      this.group = data;
    });
  }


}
