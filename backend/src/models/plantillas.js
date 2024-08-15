import mongoose from "mongoose";

const PlantillaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    price : {
        type: Number,
        required: true,
    },
    category : {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    image: {
        url: String,
        public_id: String
    },
    urlDowload: {
        type: String,
        required: true,
    },
});

export const Plantilla = mongoose.model("Plantilla", PlantillaSchema);