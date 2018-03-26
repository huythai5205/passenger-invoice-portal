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
    name: '',
    isGroupLeader: '',
    discountCredit: '',
    hasCreditSplit: '',
    balance: '',
    pax_name: '',
    GroupId: ''
  }

  constructor(private httpClient: HttpClient, private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.groupId = this.dataService.ids.groupId || this.router.navigate(['groups-list']);
  }

  onSubmit() {
    let inputs = $('input');
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].value === '') {
        this.isMissingFields = true;
        break;
      }
    }
    if (!this.isMissingFields) {
      this.passenger.GroupId = this.groupId;
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
