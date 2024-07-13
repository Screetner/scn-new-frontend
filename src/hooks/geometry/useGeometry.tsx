import {useCallback} from "react";
import {toast} from "sonner";
export function useGeometry() {


    const UpsertGeometry = useCallback(async () => {
        toast.success("Upserting geometry")
    },[])

    return {
        UpsertGeometry
    }
}