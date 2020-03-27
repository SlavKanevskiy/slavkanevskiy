import {Component, OnInit} from '@angular/core';
import {State} from "./state";
import {Actions} from "./actions";

@Component({
  selector: 'app-root',
  template: `
    <div class="wrapper">
      <div class="left_list scroll">
        <div *ngFor="let level_1 of state.markers; index as i">
          
          <div class="left_list__level_1" (click)="actions.addMarkerLevel1(level_1)">Level 1-{{i}}</div>
          
          <div *ngFor="let level_2 of level_1; index as j">
            
            <div class="left_list__level_2" (click)="actions.addMarkerLevel2(level_2)">Level 2-{{j}}</div>
            
            <div *ngFor="let marker of level_2"
                 [ngClass]="{
                    left_list__marker: true,
                    'left_list__marker-selected': marker.status
                 }"
                 (click)="actions.addMarker(marker)"
            >
              {{marker.name}}
            </div>
            
          </div>
          
        </div>
      </div>

      <div id="mapid" class="map"></div>
      
      <div class="right_list scroll">
        
        <ng-template ngFor let-level_1 [ngForOf]="state.markers">

          <ng-template ngFor let-level_2 [ngForOf]="level_1">

            <div *ngFor="let marker of level_2 | filterMarkersRightList" class="right_list__item">
              {{marker.name}}
              <span class="right_list__close" (click)="actions.deleteFromRightList(marker)">✖</span>
            </div>

          </ng-template>

        </ng-template>

        <div class="right_list__empty right_list__item">No items</div>
        
      </div>
    </div>
  `,
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
  constructor(public state: State, public actions: Actions) {}

  ngOnInit() {
    this.actions.init();
  }

}
