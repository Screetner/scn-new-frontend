import { toast } from "sonner"

export class GeometrySettingsRepository {
  public async getGeometrySettings(): Promise<void> {
    toast.info("Getting geometry settings")
  }
}