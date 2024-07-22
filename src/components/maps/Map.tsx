import {useState, useCallback, useEffect} from 'react';
import Map, {Marker, Source, Layer, Popup} from 'react-map-gl';
import {CustomMapProps, Location, PopupData} from "@/types/components/customMap.type.ts";
import { ImLocation } from "react-icons/im";
import { FaMapPin } from "react-icons/fa6";




function CustomMap({
                                            isSettingMode,
                                            initialViewState,
                                            popupData,
                                            initialGeometry = [],
                                            onGeometryChange,
                                            fullscreenControl = false
                                        }: CustomMapProps) {
    const mapboxAccessToken = import.meta.env.VITE_MAP_API_KEY as string;
    const [locations, setLocations] = useState<Location[]>(initialGeometry);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [selectedPopup, setSelectedPopup] = useState<PopupData | null>(null);

    useEffect(() => {
        setLocations(initialGeometry);
    }, [initialGeometry]);

    useEffect(() => {
        if (onGeometryChange) {
            onGeometryChange(locations);
        }
    }, [locations, onGeometryChange]);

    const handleMapClick = useCallback((event: any) => {
        if (!isSettingMode) return;

        const newLocation = {long: event.lngLat.lng, lat: event.lngLat.lat};
        setLocations(prevLocations => [...prevLocations, newLocation]);
    }, [isSettingMode]);

    const polygonData = {
        type: 'Feature',
        geometry: {
            type: 'Polygon',
            coordinates: [locations.length > 2 ? [...locations.map(loc => [loc.long, loc.lat]), [locations[0].long, locations[0].lat]] : []]
        }
    };

    return (
        <Map
            mapboxAccessToken={mapboxAccessToken}
            initialViewState={initialViewState}
            style={fullscreenControl ? {width: "100vw", height: "100vh"} : {width: "100%", height: "600px"}}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            onClick={handleMapClick}
        >
            <Source id="polygon" type="geojson" data={polygonData}>
                <Layer
                    id="polygon"
                    type="fill"
                    paint={{
                        'fill-color': '#088',
                        'fill-opacity': 0.3
                    }}
                />
                <Layer
                    id="polygon-outline"
                    type="line"
                    paint={{
                        'line-color': '#088',
                        'line-width': 2
                    }}
                />
            </Source>

            {isSettingMode && locations.map((location, index) => (
                <Marker
                    key={index}
                    longitude={location.long}
                    latitude={location.lat}
                >
                    <div
                        style={{
                            color: hoveredIndex === index ? 'blue' : 'red',
                            fontSize: '24px',
                            cursor: 'pointer',
                            transition: 'color 0.3s'
                        }}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        onClick={(e) => {
                            e.stopPropagation();
                            setLocations(prevLocations =>
                                prevLocations.filter((_, i) => i !== index)
                            );
                        }}
                    >
                        <FaMapPin
                            style={{color: 'revert-layer', fontSize: '30px', cursor: 'pointer'}}
                        />
                        {hoveredIndex === index && (
                            <span style={{
                                position: 'absolute',
                                backgroundColor: 'white',
                                padding: '5px',
                                borderRadius: '3px',
                                boxShadow: '0 0 5px rgba(0,0,0,0.3)',
                                left: '100%',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                whiteSpace: 'nowrap'
                            }}>
                Click to remove
              </span>
                        )}
                    </div>
                </Marker>
            ))}

            {!isSettingMode && popupData && popupData.map((data, index) => (
                <Marker
                    key={`popup-${index}`}
                    longitude={data.location.long}
                    latitude={data.location.lat}
                    onClick={() => {
                        setSelectedPopup(data);
                    }}
                >
                    {/*<div style={{color: 'green', fontSize: '24px', cursor: 'pointer'}}></div>*/}
                    <ImLocation
                        style={{color: 'red', fontSize: '24px', cursor: 'pointer'}}
                    />
                </Marker>
            ))}

            {selectedPopup && (
                <Popup
                    longitude={selectedPopup.location.long}
                    latitude={selectedPopup.location.lat}
                    onClose={() => setSelectedPopup(null)}
                    closeOnClick={false}
                >
                    {selectedPopup.content}
                </Popup>
            )}
        </Map>
    );
}

export default CustomMap;