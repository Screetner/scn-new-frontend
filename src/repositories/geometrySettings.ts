import { toast } from "sonner"
import axios from "@/libs/axios.ts";
import {Location} from "@/types/components/customMap.type.ts";

export class GeometrySettingsRepository {
  static async getGeometrySettings(): Promise<void> {
    toast.info("Getting geometry settings")
  }

  static async upsertGeometry(border: Location[]): Promise<void> {
    return axios.post("/geolocation/post", {border : border})
  }
}