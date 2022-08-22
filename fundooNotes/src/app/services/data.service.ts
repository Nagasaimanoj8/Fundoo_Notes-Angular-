import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private messageSource = new BehaviorSubject(' ');
  private Grid = new BehaviorSubject(true);
  currentMessage = this.messageSource.asObservable();
  currentView = this.Grid.asObservable()

  constructor() { }
  changeMessage(message: any) {
    this.messageSource.next(message)
  }

  changeView(flag:boolean){
    this.Grid.next(flag)
  }
}
 