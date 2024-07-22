import React from "react";
import PageLayout from "@/components/page/PageLayout.tsx";
import CustomMap from "@/components/maps/Map.tsx";
import { Location, PopupData } from "@/types/components/customMap.type.ts";

const HomePage: React.FC = () => {

    const geometry: Location[] = [
        { long: 100.47, lat: 13.77 },  // Northwest corner
        { long: 100.62, lat: 13.77 },  // Northeast corner
        { long: 100.62, lat: 13.73 },  // Southeast corner
        { long: 100.47, lat: 13.73 },  // Southwest corner
        { long: 100.47, lat: 13.77 },  // Back to Northwest to close the polygon
    ];
    const mockPopupData: PopupData[] = [
        {
            location: { long: 100.501, lat: 13.756 },
            content: <div>
                <h3 className={"text-blue-950 font-bold"}>Grand Palace</h3>
                <p>Historic royal palace complex and sacred temple</p>
            </div>
        },
        {
            location: { long: 100.49, lat: 13.745 },
            content: <div>
                <h3>Wat Pho</h3>
                <p>Famous for its giant reclining Buddha statue</p>
            </div>
        },
        {
            location: { long: 100.51, lat: 13.74 },
            content: <div>
                <h3>Wat Arun</h3>
                <p>Iconic temple known as the Temple of Dawn</p>
            </div>
        },
        {
            location: { long: 100.52, lat: 13.75 },
            content: <div>
                <h3>Chinatown</h3>
                <p>Vibrant district known for street food and markets</p>
            </div>
        },
        {
            location: { long: 100.48, lat: 13.76 },
            content: <div>
                <h3>Khao San Road</h3>
                <p>Popular backpacker street with shops and nightlife</p>
            </div>
        }
    ];

    return (
        <PageLayout pageTitle="Home">
            <div className={"w-full"}>
                <CustomMap
                    isSettingMode={false}
                    initialViewState={{
                        longitude: 100.5,
                        latitude: 13.75,
                        zoom: 10
                    }}
                    initialGeometry={geometry}
                    popupData={mockPopupData}
                    fullscreenControl
                />
            </div>
        </PageLayout>
    )
}

export default HomePage;