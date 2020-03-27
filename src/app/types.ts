export class Marker {
  id: string;
  name: string;
  lat: number;
  lng: number;
  status: '' | 'onMap' | 'rightList';

  constructor(lat: number, lng: number) {
    this.id = lat + '' + lng;
    this.name = lat.toFixed(3) + ', ' + lng.toFixed(3);
    this.lat = lat;
    this.lng = lng;
    this.status = '';
  }
}
