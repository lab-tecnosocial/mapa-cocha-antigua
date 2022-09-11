import { MapContainer, TileLayer, useMap, Popup, Marker } from 'react-leaflet'

export default function Mapa() {
    return (
        <MapContainer center={[-17.394, -66.161]} zoom={13.5} scrollWheelZoom={false} className="map-container">
            <TileLayer
                url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.png"
            />
            <Marker position={[-17.394, -66.161]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    )
}

