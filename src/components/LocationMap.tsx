import L from "leaflet";
import "leaflet/dist/leaflet.css"
import { useEffect } from "react";


interface LocationInfo {
  lat: number, 
  lon: number,
  zoom: number
};

export default function LocationMap(props: LocationInfo) {
  const {lon, lat, zoom} = props;
  useEffect(() => {
    let map = L.map('map').setView([lat, lon], zoom);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    return () => {
      map.remove();
    }
  },[lon, lat, zoom]);

  return (
    <>
      <div id="map"></div>
    </>
  )
}