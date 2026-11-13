import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";
import * as PlayerRepository from "../repositories/players-repository";
import * as HttpResponse from "../utils/http-helper";



export const getPlayerService = async () => {
    const data = await PlayerRepository.findAllPlayers();
    let response = null;



    if(data){
        response = await HttpResponse.ok(data);
    } else {
        response = await HttpResponse.noContent();
    }
    
    return response;
}

export const getPlayerByIdService = async (id: number) => {
    const player = await PlayerRepository.findPlayerById(id);

    if (!player) {
        return {
            statusCode: 404,
            body: { message: "Player not found" },
        };
    }

    return HttpResponse.ok(player);
};

export const createPlayerService = async (input: unknown) => {
    if (typeof input !== "object" || input === null || Array.isArray(input)) {
        return HttpResponse.badRequest("Request body must be an object");
    }

    const player = input as Partial<Omit<PlayerModel, "id">>;
    const statistics = player.statistics;
    const statisticNames = [
        "Overall",
        "Pace",
        "Shooting",
        "Passing",
        "Dribbling",
        "Defending",
        "Physical",
    ] as const;

    if (
        typeof player.name !== "string" ||
        !player.name.trim() ||
        typeof player.club !== "string" ||
        !player.club.trim() ||
        typeof player.nationality !== "string" ||
        !player.nationality.trim() ||
        typeof player.position !== "string" ||
        !player.position.trim() ||
        typeof statistics !== "object" ||
        statistics === null ||
        statisticNames.some(
            (statistic) =>
                typeof statistics[statistic] !== "number" ||
                !Number.isFinite(statistics[statistic])
        )
    ) {
        return HttpResponse.badRequest("Player data is incomplete or invalid");
    }

    const createdPlayer = await PlayerRepository.createPlayer({
        name: player.name.trim(),
        club: player.club.trim(),
        nationality: player.nationality.trim(),
        position: player.position.trim(),
        statistics,
    });

    return HttpResponse.created(createdPlayer);
};

export const deletePlayerService = async (id: number) => {
    const isDeleted = await PlayerRepository.deleteOnePlayer(id);

    if (!isDeleted) {
        return {
            statusCode: 404,
            body: { message: "Player not found" },
        };
    }

    return HttpResponse.ok({ message: "Player deleted" });
}

export const updatePlayerService = async (
    id: number,
    input: unknown
) => {
    if (typeof input !== "object" || input === null || Array.isArray(input)) {
        return HttpResponse.badRequest("Statistics must be an object");
    }

    const statisticNames = [
        "Overall",
        "Pace",
        "Shooting",
        "Passing",
        "Dribbling",
        "Defending",
        "Physical",
    ] as const;
    const statistics = input as Partial<StatisticsModel>;

    if (
        statisticNames.some(
            (statistic) =>
                typeof statistics[statistic] !== "number" ||
                !Number.isFinite(statistics[statistic])
        )
    ) {
        return HttpResponse.badRequest("Statistics are incomplete or invalid");
    }

    const data = await PlayerRepository.findAndModifyPlayer(id, statistics as StatisticsModel);

    let response = null;
    
    if (!data) {
        return {
            statusCode: 404,
            body: { message: "Player not found" },
        };
    }

    if(Object.keys(data).length === 0){
        response = await HttpResponse.badRequest();
    } else {
        return HttpResponse.ok(data);
    }


    return response;
};