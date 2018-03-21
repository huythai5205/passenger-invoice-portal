import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { DataService } from '../services/data.service';

@Component({
  selector: 'ht-update-passenger',
  templateUrl: './update-passenger.component.html',
  styleUrls: ['./update-passenger.component.css']
})
export class UpdatePassengerComponent implements OnInit {

  public passenger: Object;

  constructor(private httpClient: HttpClient, private router: Router, private dataService: DataService) { }

  ngOnInit() {
    const passengerId = this.dataService.ids.passengerId;
    //TODO: change http://localhost:3000/api/passenger/ to ./api/group
    this.httpClient.get('http://localhost:3000/api/passenger/' + passengerId).subscribe(data => {
      this.passenger = data;
    },
      err => {
        console.log(err);
      });
  }

  onSubmit() {
    //TODO: change http://localhost:3000/api/passenger/ to ./api/group
    this.httpClient.put('http://localhost:3000/api/passenger', this.passenger).subscribe(data => {
      this.router.navigate(['passengers-list']);
    },
      err => {
        console.log(err);
      });
  }

}
