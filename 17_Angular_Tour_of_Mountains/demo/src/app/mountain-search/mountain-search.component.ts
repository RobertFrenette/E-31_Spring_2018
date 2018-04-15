import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Mountain } from '../mountain';
import { MountainService } from '../mountain-service/mountain.service';

@Component({
  selector: 'app-mountain-search',
  templateUrl: './mountain-search.component.html',
  styleUrls: [ './mountain-search.component.css' ]
})
export class MountainSearchComponent implements OnInit {
  mountains$: Observable<Mountain[]>;
  private searchTerms = new Subject<string>();

  constructor(private mountainService: MountainService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.mountains$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.mountainService.searchMountains(term)),
    );
  }
}