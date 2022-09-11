import { MapContainer, TileLayer, useMap, Popup, Marker, Circle } from 'react-leaflet'
import data from '../data/cocha-antigua.json'


export default function Mapa() {
    return (
        <MapContainer center={[-17.394, -66.161]} zoom={13.5} attributionControl={false} className="map-container">
            <TileLayer
                attribution = '<a href="https://labtecnosocial.org/">Lab TecnoSocial</a>'
                url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.png"
            />
            {data.map((item, index) => (
                <Marker key={index} position={item.coordArray}>
                    <Popup>
                        <img src={item.imgUrl} width="300px"/>
                        <h3></h3>
                        <p>{item.anio}</p>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    )
}

