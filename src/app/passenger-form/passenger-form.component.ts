import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../services/data.service';
// import { GroupsListComponent } from '../groups-list/groups-list.component';


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

  constructor(private httpClient: HttpClient, private data: DataService) { }

  ngOnInit() {
    // this.groupId = this.groupsList.groupId;
    // console.log(this.groupId);
    this.data.data.subscribe((groupId) => {
      this.groupId = groupId;
      console.log(this.groupId);
    });
  }

  onSubmit() {
    this.passenger.groupId = this.groupId;
    this.httpClient.post('http://locsthost:3000/api/passenger', this.passenger).subscribe((data) => {
      console.log(data);
    });

  }

}
