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
  public CreditLeft = 0;

  constructor(private httpClient: HttpClient, private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.groupId = this.dataService.ids.groupId || this.router.navigate(['groups-list']);
    //TODO: change http://localhost:3000/api/group/ to ./api/group
    this.httpClient.get('http://localhost:3000/api/group/' + this.groupId).subscribe((data) => {
      this.group = data;
      this.passengers = this.group.Passengers || "";
    },
      err => {
        console.log(err);
      });
  }

  addPassenger() {
    this.router.navigate(['passenger-form']);
  }

  onSubmit() {

    this.CreditLeft = this.group.totalGroupCredit;
    let numSplit = 0;
    for (let passenger of this.passengers) {
      if (!passenger.hasSplitCredit) {
        this.CreditLeft -= passenger.discountCredit;
      } else {
        numSplit++;
      }
    }
    const splitCredit = this.CreditLeft / numSplit;

    for (let passenger of this.passengers) {
      if (passenger.hasSplitCredit) {
        passenger.discountCredit = splitCredit;
      }
    }

    for (let passenger of this.passengers) {
      this.httpClient.put('http://localhost:3000/api/passenger', passenger).subscribe(data => {
        console.log(data);
      },
        err => {
          console.log(err);
        });
    }

  }

  deletePassenger(passengerId) {
    this.httpClient.delete('http://localhost:3000/api/passenger/' + passengerId).subscribe(data => {
      this.router.navigate(['passengers-list']);
    },
      err => {
        console.log(err);
      });
  }

  updatePassenger(passenger) {
    console.log(passenger);
  }

}
