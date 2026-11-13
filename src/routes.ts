import { Router } from "express";
import * as ClubController from "./controllers/clubs-controller";
import * as PlayerController from "./controllers/players-controller";

const router = Router();

router.get("/players", PlayerController.getPlayer);
router.get("/players/:id", PlayerController.getPlayerById);
router.delete("/players/:id", PlayerController.deletePlayer)
router.patch("/players/:id", PlayerController.updatePlayer)
router.put("/players/:id", PlayerController.updatePlayer)
router.post("/players", PlayerController.postPlayer);


router.get("/clubs", ClubController.getClubs);


export default router;