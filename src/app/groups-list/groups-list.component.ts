import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../services/data.service';


@Component({
  selector: 'ht-groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.css']
})

export class GroupsListComponent implements OnInit {

  public groups;

  constructor(private httpClient: HttpClient, private router: Router, private dataService: DataService) { }

  ngOnInit() {
    //TODO: change http://localhost:3000/api/groups to ./api/groups
    this.httpClient.get('http://localhost:3000/api/groups').subscribe((data) => {
      this.groups = data;
    },
      (err) => {
        console.log(err);
      });
  }

  deleteGroup(groupId) {
    //TODO: change http://localhost:3000/api/groups to ./api/groups
    this.httpClient.delete('http://localhost:3000/api/group/' + groupId).subscribe((data) => {
      this.router.navigate(['groups-list']);
    },
      (err) => {
        console.log(err);
      });
  }

  getPassengers(groupId) {
    this.dataService.ids.groupId = groupId;
    this.router.navigate(['passengers-list']);
  }

  updateGroup(groupId) {
    console.log(groupId);
    this.dataService.ids.groupId = groupId;
    this.router.navigate(['update-group']);
  }
}
