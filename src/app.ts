import express, { ErrorRequestHandler } from "express";
import router from "./routes";
import cors from "cors";

const isMalformedJsonError = (error: unknown): boolean => {
    return (
        typeof error === "object" &&
        error !== null &&
        "type" in error &&
        error.type === "entity.parse.failed"
    );
};

const jsonErrorHandler: ErrorRequestHandler = (error, _req, res, next) => {
    if (isMalformedJsonError(error)) {
        res.status(400).json({ message: "Malformed JSON request body" });
        return;
    }

    next(error);
};

function createApp() {
    const app = express();

    app.use(express.json());
    app.use("/api", router);
    app.use(jsonErrorHandler);

    app.use(cors());

    return app;

};


export default createApp;
