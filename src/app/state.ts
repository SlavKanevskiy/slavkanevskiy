import {Injectable} from "@angular/core";
import {Marker} from "./types";
import {createRandomMarkers} from "./config";

@Injectable()
export class State {
  markers: Marker[][][] = createRandomMarkers();
}
