import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../services/data.service';

@Component({
  selector: 'ht-update-group',
  templateUrl: './update-group.component.html',
  styleUrls: ['./update-group.component.css']
})
export class UpdateGroupComponent implements OnInit {

  group: Object;

  constructor(private httpClient: HttpClient, private router: Router, private dataService: DataService) { }

  ngOnInit() {
    const groupId = this.dataService.ids.groupId;
    //TODO: change http://localhost:3000/api/group to ./api/group
    this.httpClient.get('http://localhost:3000/api/group/' + groupId).subscribe(data => {
      this.group = data;
    });
  }

  onSubmit() {
    //TODO: change http://localhost:3000/api/group to ./api/group
    this.httpClient.post('http://localhost:3000/api/group/', this.group).subscribe(data => {
      this.router.navigate(['group-list']);
    });
  }
}
