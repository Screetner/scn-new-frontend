import React from "react";
import PageLayout from "@/components/page/PageLayout.tsx";
import {Button} from "@/components/ui/button.tsx";

const GeolocationPage: React.FC = () => {
    return (
        <PageLayout pageTitle="Geolocation">
            <Button>Get Location</Button>
        </PageLayout>
    );
}

export default GeolocationPage