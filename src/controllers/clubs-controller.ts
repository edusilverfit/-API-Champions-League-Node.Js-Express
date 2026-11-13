import { getClubService } from "../services/clubs-services"
import { Request, Response } from "express";



export const getClubs = async (req: Request, res: Response) => {
    const response = await getClubService();
    res.statusCode = response.statusCode;
    res.json(response.body);
};