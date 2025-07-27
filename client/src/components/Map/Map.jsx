import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function Map() {
  return (
    <div className="map"> 
        <h1>Location</h1>
        <MapContainer id="map" center={[1.2921, 36.8219]} zoom={13} style={{ height: "400px", width: "100%" }}>
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        <Marker position={[-1.065874, 37.051853]}>
            <Popup>
            Kiambu, Kenya <br /> Witeithie commuter stage
            </Popup>
        </Marker>
        </MapContainer>
    </div>
  );
}