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

  public passengers;

  constructor(private httpClient: HttpClient, private dataService: DataService, private router: Router) { }

  ngOnInit() {

    this.dataService.data.subscribe((groupId) => {
      //TODO: change http://localhost:3000/api/passengers to ./api/passengers 
      this.httpClient.get('http://localhost:3000/api/passengers' + groupId).subscribe((data) => {
        this.passengers = data;
      });
    });

  }

  addPassenger() {
    this.router.navigate(['passenger-form']);
  }
}
