import {Marker} from "./types";

export const ZOOM = 9;
export const LAT = 55;
export const LNG = 83;


export let createRandomMarkers = ():Marker[][][] => {
  let level_1 = [];

  for(let i = 0; i < 10; i++) {
    let level_2 = [];

    for(let j = 0; j < 10; j++) {
      let level_3 = [];

      for(let k = 0; k < 10; k++) {
        const lat = LAT + Math.random() - 0.5;
        const lng = LNG + Math.random() - 0.5;

        level_3.push(new Marker(lat, lng));
      }

      level_2.push(level_3);
    }

    level_1.push(level_2);
  }

  return level_1;
};
