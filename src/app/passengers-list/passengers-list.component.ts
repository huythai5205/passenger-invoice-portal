import { Component, OnInit, OnChanges, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { DataService } from '../services/data.service';

@Component({
  selector: 'ht-passengers-list',
  templateUrl: './passengers-list.component.html',
  styleUrls: ['./passengers-list.component.css']
})

export class PassengersListComponent implements OnInit {

  public group;
  public groupId;
  public passengers;

  constructor(private httpClient: HttpClient, private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.groupId = this.dataService.ids.groupId || this.router.navigate(['groups-list']);
    //TODO: change http://localhost:3000/api/group/ to ./api/group
    this.httpClient.get('http://localhost:3000/api/group/' + this.groupId).subscribe((data) => {
      this.group = data;
      this.passengers = this.group.Passengers;
    },
      err => {
        console.log(err);
      });
  }

  addPassenger() {
    this.router.navigate(['passenger-form']);
  }

  updatePassenger(passengerId) {
    this.dataService.ids.passengerId = passengerId;
    this.router.navigate(['update-passenger']);
  }
}
