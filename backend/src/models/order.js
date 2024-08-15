import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
    },
    lastname : {
        type: String,
        required: true,
    },
    email : {
        type: String,
        required: true,
    },
    idPlantilla : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Plantilla",
        required: true,
    },
    estadoOrder : {
        type: String,
        enum: ["Pendiente", "En proceso", "Finalizado"],
        default: "Pendiente",
    }
});

export const order = mongoose.model("Order", OrderSchema);