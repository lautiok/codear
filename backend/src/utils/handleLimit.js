import rateLimit from "express-rate-limit";

export const limit = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: "Demasiadas solicitudes de esta IP. Vuelva a intentarlo después de una hora.",
})