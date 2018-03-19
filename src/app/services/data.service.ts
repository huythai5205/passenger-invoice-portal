import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DataService {
  data = new Subject<String>();
  constructor() { }
  transferData(data) {
    this.data.next(data);
  }
}
