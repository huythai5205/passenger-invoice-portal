import { Component, OnInit, OnChanges, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { DataService } from '../services/data.service';

@Component({
  selector: 'ht-passengers-list',
  templateUrl: './passengers-list.component.html',
  styleUrls: ['./passengers-list.component.css']
})

export class PassengersListComponent implements OnInit, AfterViewInit {

  public group;
  public groupId;
  public passengers: any[] = [];

  constructor(private httpClient: HttpClient, private dataService: DataService, private router: Router) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    console.log('AFTER VIEW INIT');
    this.dataService.data.subscribe((groupId) => {
      //TODO: change http://localhost:3000/api/group to ./api/group
      this.groupId = groupId;
      console.log('groupId', this.groupId);
      this.httpClient.get('http://localhost:3000/api/group/' + groupId).subscribe((data) => {
        this.group = data;
        this.passengers = (<any>data).Passengers;
        console.log('PASSENGERS', this.passengers);
        console.log('GROUP', data)
        console.log(this.group.Passengers[0].balance);
        console.log(this.group.Passengers);
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
