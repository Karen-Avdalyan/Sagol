import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

import styles from './googleMap.module.scss';

function Map() {
    const center = useMemo(() => ({ lat: 32.10506504237854, lng: 34.898310134923385 }), []);

    return (
        <GoogleMap
            zoom={10}
            center={center}
            mapContainerClassName={styles.container}
        >
            <Marker position={center} />
        </GoogleMap>
    );
};

export default function GoogleMaps() {
    const { isLoaded } = useLoadScript({ googleMapsApiKey: '' });

    if (!isLoaded) return <div>Loading ...</div>;
    return <Map />;
}