import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'ht-groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.css']
})

export class GroupsListComponent implements OnInit {

  public groups;
  public groupId;

  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit() {
    //TODO: change http://localhost:3000/api/groups to ./api/groups 
    this.httpClient.get('http://localhost:3000/api/groups').subscribe((data) => {
      this.groups = data;
      console.log(data);
    },
      (err) => {
        console.log(err);
      });
  }

  getPassengers(groupId) {
    console.log(groupId);
    this.groupId = groupId;
    this.router.navigate(['passenger-form']);
  }
}
