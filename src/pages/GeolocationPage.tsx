import React, {useState} from "react";
import PageLayout from "@/components/page/PageLayout.tsx";
import CustomMap from "@/components/maps/Map.tsx";
import {Button} from "@/components/ui/button.tsx";
import {useGeometry} from "@/hooks/geometry/useGeometry.tsx";
import {Location} from "@/types/components/customMap.type.ts";



const GeolocationPage: React.FC = () => {
    const {UpsertGeometry} = useGeometry()
    const [savedGeometry, setSavedGeometry] = useState<Location[]>([
        {longitude: 100.5, latitude: 13.75},
        {longitude: 100.6, latitude: 13.8},
        {longitude: 100.55, latitude: 13.7},
    ]);

    const handleGeometryChange = (newGeometry: Location[]) => {
        setSavedGeometry(newGeometry);
    };

    const handleSaveGeometry = async () => {
        console.log("Saving geometry:", savedGeometry);
        await UpsertGeometry()
    };

    return (
        <PageLayout pageTitle="Geolocation">
            <div className="w-full h-full">
                <div className="w-full flex items-center justify-center mb-5">
                    <CustomMap
                        isSettingMode={true}
                        initialViewState={{
                            longitude: 100.5,
                            latitude: 13.75,
                            zoom: 10
                        }}
                        initialGeometry={savedGeometry}
                        onGeometryChange={handleGeometryChange}
                    />
                </div>
                <Button
                    onClick={handleSaveGeometry}
                    size={"lg"}
                >
                    Save Geometry
                </Button>
            </div>
        </PageLayout>
    );
}

export default GeolocationPage;