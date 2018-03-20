import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {
  groupId: string;
  data = new BehaviorSubject<String>(null);
  constructor() { }
  transferData(data) {
    this.groupId = data;
    this.data.next(data);
  }
}
