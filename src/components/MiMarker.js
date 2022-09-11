// make a componenent marker with a custom icon and popup with img and lighbtox

import { Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'
import { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";


const icon = new Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
})

export default function MiMarker({ item }) {
    const [open, setOpen] = useState(false);

    return (
        <Marker position={item.coordArray} icon={icon}>
            <Popup>
                <img src={item.imgUrl} width="300px" alt={item.lugar}onClick={() => setOpen(true)} />
                <h3></h3>
                <p>{item.anio}</p>
                    <Lightbox
                        open={open}
                        close={() => setOpen(false)}
                        slides={[{src: item.imgUrl}]}
                    />

            </Popup>
        </Marker>
    )
}

