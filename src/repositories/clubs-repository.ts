import { ClubModel } from "../models/club-model";
import fs from "fs/promises";
import path from "path";

export const findAllClubs = async (): Promise<ClubModel[]> => {
    const clubsFilePath = path.resolve(process.cwd(), "src", "data", "clubs.json");
    const data = await fs.readFile(clubsFilePath, "utf-8");
    const clubs: ClubModel[] = JSON.parse(data);
    return clubs;
};
