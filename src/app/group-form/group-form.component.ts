import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

declare let $: any;

@Component({
  selector: 'ht-group-form',
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.css']
})
export class GroupFormComponent implements OnInit {

  public isMissingFields = false;
  public group = {
    groupName: '',
    tourName: '',
    tourCode: '',
    departureDate: '',
    totalGroupCredit: '',
    creditLeft: ''
  }

  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.isMissingFields = false;
    let inputs = $('input');
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].value === '') {
        this.isMissingFields = true;
        break;
      }
    }

    if (!this.isMissingFields) {
      this.group.creditLeft = this.group.totalGroupCredit;
      //TODO: change http://localhost:3000/api/group to ./api/group
      this.httpClient.post('http://localhost:3000/api/group', this.group).subscribe((data) => {
        this.router.navigate(['groups-list']);
      },
        error => console.log(error));
    }
  }

}
