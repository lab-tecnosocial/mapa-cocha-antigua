import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import data from '../data/cocha-antigua.json'
import MiMarker from './MiMarker'
import MarkerClusterGroup from 'react-leaflet-cluster'



export default function Mapa() {

    return (
        <MapContainer center={[-17.394, -66.161]} zoom={13.5} attributionControl={false} className="map-container">
            <TileLayer
                attribution='<a href="https://labtecnosocial.org/">Lab TecnoSocial</a>'
                url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.png"
            />
             <MarkerClusterGroup
        chunkedLoading
        spiderLegPolylineOptions={{color: '#C9821E'}}
        polygonOptions={{color: '#C9821E'}}
        maxClusterRadius={40}

      >
            {data.map((item, index) => (
                <MiMarker key={index} item={item} />
            ))}
            </MarkerClusterGroup>
        </MapContainer>
    )
}
