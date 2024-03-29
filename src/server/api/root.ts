import { createTRPCRouter } from "~/server/api/trpc";
import { cameraLocationsRouter } from "./routers/cameraLocation";
import { videoStatusRouter } from "./routers/videoStatus";
import { cameraVideoRouter } from "./routers/cameraVideo";
import { vesselCorrectionsRouter } from "./routers/vesselCorrections";
import { appUpdateRouter } from "./routers/appUpdate";
import { mlModelRouter } from "./routers/mlModels";


export const appRouter = createTRPCRouter({
  cameraLocations: cameraLocationsRouter,
  videoStatuses: videoStatusRouter,
  cameraVideos: cameraVideoRouter,
  vesselCorrections: vesselCorrectionsRouter,
  appUpdate: appUpdateRouter,
  mlModels: mlModelRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
