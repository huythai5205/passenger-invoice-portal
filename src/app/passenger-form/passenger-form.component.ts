import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { DataService } from '../services/data.service';

declare let $: any;

@Component({
  selector: 'ht-passenger-form',
  templateUrl: './passenger-form.component.html',
  styleUrls: ['./passenger-form.component.css']
})
export class PassengerFormComponent implements OnInit {

  public groupId;
  public isMissingFields;
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
    console.trace();

    // console.log("passengers form");
    this.groupId = this.dataService.groupId;
    // this.dataService.data.subscribe((groupId) => {
    //   this.groupId = groupId;
    //   console.log('fasdfasd', groupId);
    //   console.log(this.groupId);
    // });
    console.log(this.groupId);
  }

  onSubmit() {
    let inputs = $('input');
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].value === '') {
        this.isMissingFields = true;
        break;
      }
    }
    console.log(this.groupId);
    if (!this.isMissingFields) {
      this.passenger.groupId = this.groupId;
      console.log(this.passenger);
      //TODO: change http://localhost:3000/api/passenger to ./api/passenger
      this.httpClient.post('http://localhost:3000/api/passenger', this.passenger).subscribe((data) => {
        this.router.navigate(['passengers-list']);
      },
        err => {
          console.log(err);
        });

    }

  }

}
