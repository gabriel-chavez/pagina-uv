import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

export default function Mapa(props) {
  const { position, zoom } = props;

//   useEffect(() => {
    
//   }, [position, zoom]);

  return (
    <MapContainer center={position} zoom={zoom} scrollWheelZoom={false} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contribuyentes'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          Un popup CSS3 bonito. <br /> Fácilmente personalizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
