import { Request, Response } from "express"
import * as playerServices from "../services/player-services";
import { StatisticsModel } from "../models/statistics-model";

export const getPlayer = async (req: Request, res: Response) => {
        const HttpResponse: any = await playerServices.getPlayerService();
        res.status(HttpResponse.statusCode).json(HttpResponse.body);
    };

export const getPlayerById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
        res.status(400).json({ message: "Invalid player id" });
        return;
    }

    const httpResponse: any = await playerServices.getPlayerByIdService(id);
    res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const postPlayer = async(req: Request, res: Response) => {
    const httpResponse: any = await playerServices.createPlayerService(req.body);
    res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const deletePlayer = async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
        res.status(400).json({ message: "Invalid player id" });
        return;
    }

    const httpResponse: any = await playerServices.deletePlayerService(id);
    res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const updatePlayer = async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
        res.status(400).json({ message: "Invalid player id" });
        return;
    }

    const httpResponse = await playerServices.updatePlayerService(id, req.body);
    res.status(httpResponse.statusCode).json(httpResponse.body);
};

