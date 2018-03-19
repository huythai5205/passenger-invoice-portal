import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'ht-passenger-form',
  templateUrl: './passenger-form.component.html',
  styleUrls: ['./passenger-form.component.css']
})
export class PassengerFormComponent implements OnInit {

  public groupId;
  public passenger = {
    group_name: '',
    tour_name: '',
    tour_code: '',
    departure_date: '',
    invoice: '',
    pax_name: '',
    payments: '',
    balance: '',
    due_date: '',
    isGroupLeader: '',
    total_group_credit: '',
    hasGroupCredit: '',
    group_credit_shared: '',
    group_credit_split: '',
    group_credit_amt: '',
    groupId: ''
  }

  constructor(private httpClient: HttpClient, private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.dataService.data.subscribe((groupId) => {
      this.groupId = groupId;
    });
  }

  onSubmit() {
    this.passenger.groupId = this.groupId;
    //TODO: change http://localhost:3000/api/passenger to ./api/passenger
    this.httpClient.post('http://localhost:3000/api/passenger', this.passenger).subscribe((data) => {
      this.router.navigate(['passengers-list']);
    },
      err => {
        console.log(err);
      });

  }

}
