import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  @Input() mountains;
  @Output() likes: EventEmitter<number> = new EventEmitter<number>();

  likeCount: number = 0;

  constructor() { }

  ngOnInit() { }

  like($event) {
    this.likeCount++;
    this.likes.emit(this.likeCount);
  }

}
