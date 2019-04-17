import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges {

  @Input() projects;
  @Input() id;
  public nextId;
  private _currentIndex;
  private _currentProjId;
  private _nextIndex;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (this.projects) {
      this.next(this.id);
    }
  }

  ngOnInit() {
    if (this.projects) {
      this.next(this.id);
    }
  }

  public next(id) {

    // Get
    this.projects.map((obj, index) => {
      // Get current project
      if (obj.id === id) {
        this._currentIndex = index;
        this._currentProjId = obj.id;
      }
      // Check if last project & set index
      if (index === (this.projects.length - 1)) {
        this._nextIndex = 0;
      }
    });

    // Set
    this.projects.map((obj, index) => {
      // Set project id based on index
      if (index === this._nextIndex) {
        this.nextId = obj.id;
      } else if (index === (this._currentIndex + 1)) {
        this.nextId = obj.id;
      }
    });

  }

}

