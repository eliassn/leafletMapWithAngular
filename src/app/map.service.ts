import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import * as L from 'leaflet'

@Injectable({
  providedIn: 'root'
})
export class MapService {
  url : string = 'http://localhost:3000/data'
  constructor(private http : HttpClient) { }
makeMarkers(map : L.Map):void{
this.http.get(this.url).subscribe((response : any)=>{
for(const c of response){
  const lat = c.coordinates[0]
  const lon = c.coordinates[1]
  const marker = L.marker([lon,lat]).addTo(map)
  marker.bindPopup(`<center><p><strong>${c.name}</strong></p></center><br><p>${c.matricule}</p>`).openPopup()
}
})
}
   
}
