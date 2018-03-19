import { Component, OnInit } from '@angular/core';
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

    this.dataService.data.subscribe((groupId) => {
      //TODO: change http://localhost:3000/api/group to ./api/group 
      this.groupId = groupId;
      console.log('groupId', this.groupId);
      this.httpClient.get('http://localhost:3000/api/group/' + groupId).subscribe((data) => {
        this.group = data;
        this.passengers = this.group.Passengers;
        console.log(this.group.Passengers[0].balance);
        console.log(this.group);
      });
    },
      err => {
        console.log(err);
      });

  }

  addPassenger() {
    console.log(this.groupId);
    // this.dataService.transferData(this.groupId);
    this.router.navigate(['passenger-form']);
  }
}
