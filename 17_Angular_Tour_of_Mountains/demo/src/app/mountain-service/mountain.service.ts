import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Mountain } from '../mountain';
import { MOUNTAINS } from '../mock-mountains';

import { MessageService } from '../message-service/message.service';

@Injectable()
export class MountainService {

  constructor(private messageService: MessageService) { }

  getMountains(): Observable<Mountain[]> {
    this.messageService.add('MountainService: fetched mountains');
    return of(MOUNTAINS);
  }

  getMountain(id: number): Observable<Mountain> {
    this.messageService.add(`MountainService: fetched mountain id=${id}`);
    return of(MOUNTAINS.find(mountain => mountain.id === id));
  }

}
