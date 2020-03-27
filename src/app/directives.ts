import { Pipe, PipeTransform } from '@angular/core';
import {Marker} from "./types";

@Pipe({
  name: 'filterMarkersRightList',
  pure: false
})
export class FilterMarkersRightList implements PipeTransform {
  transform(markers: Marker[]): any {
    if (!markers)
      return markers;

    return markers.filter( m => m.status === 'rightList');
  }
}
