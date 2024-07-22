import {useCallback} from "react";
import {toast} from "sonner";
import {GeometrySettingsRepository} from "@/repositories/geometrySettings.ts";
import {Location} from "@/types/components/customMap.type.ts";
export function useGeometry() {


    const UpsertGeometry = useCallback(async (border : Location[]) => {
        toast.promise(GeometrySettingsRepository.upsertGeometry(border),{
            loading: "Saving geometry...",
            success: "Geometry saved successfully",
            error: "Failed to save geometry"
        })
    },[])

    return {
        UpsertGeometry
    }
}