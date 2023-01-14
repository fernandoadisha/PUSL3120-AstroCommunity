import { Component, ElementRef, ViewChild, OnInit, Input } from '@angular/core';
import { icon, latLng, LatLng, LatLngExpression, LatLngTuple, map, Map, marker, Marker, tileLayer } from 'leaflet';
import { LocationService } from 'src/app/services/location.service';
import { Order } from 'src/app/shared/models/Order';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  @Input()
  order!:Order;

  private readonly MARKER_ZOOM_LEVEL = 16;
  private readonly MARKER_ICON = icon({
    iconUrl:'https://cdn-icons-png.flaticon.com/512/1301/1301421.png', //  'https://res.cloudinary.com/foodmine/image/upload/v1638842791/map/marker_kbua9q.png', ./aseest/geo-alt.svg
    iconSize: [42,42],
    iconAnchor: [21, 21]
  })
  private readonly DEFAULT_LATLNG: LatLngTuple = [13.75, 21.62]

  @ViewChild('map', {static:true})
  mapRef!: ElementRef;

  map!:Map;
  currentMarker!:Marker;

  constructor (private locationService:LocationService) {}

  ngOnInit():void {
    this.initializeMap()
  }

  initializeMap(){
    if(this.map) return;

    this.map = map(this.mapRef.nativeElement, {
      attributionControl: false
    }).setView(this.DEFAULT_LATLNG, 1);

    tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(this.map);


  }

  findMyLocaiton(){
    this.locationService.getCurrentLocation().subscribe({
      next: (latlng) => {

        this.map.setView(latlng, this.MARKER_ZOOM_LEVEL)
        this.setMarker(latlng)
      }
    })
  }

  setMarker(latlng:LatLngExpression) {
    this.addressLatLng = latlng as LatLng;
    if(this.currentMarker) {
      this.currentMarker.setLatLng(latlng);
      return;
    }

    this.currentMarker = marker(latlng, {
      draggable: true,
      icon: this.MARKER_ICON
    }).addTo(this.map);

    this.currentMarker.on('dragend', () => {
      this.addressLatLng = this.currentMarker.getLatLng();
    })

  }

  set addressLatLng(latlng:LatLng) {
    latlng.lat = parseFloat(latlng.lat.toFixed(8));
    latlng.lng = parseFloat(latlng.lng.toFixed(8));
    this.order.addressLatLng = latlng;
    console.log(this.order.addressLatLng);
  }

}
