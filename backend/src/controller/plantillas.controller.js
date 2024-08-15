import { Plantilla } from "../models/plantillas.js";
import { deleteImage, uploadImage } from "../config/clourinary.js";
import fs from "fs-extra";

export const createPlantilla = async (req, res) => {
  try {
    let img;
    const { nombre, descripcion, category, price, urlDowload } = req.body;
    if (req.files.image) {
      const imageRes = await uploadImage(req.files.image.tempFilePath);
      await fs.remove(req.files.image.tempFilePath);
      img = {
        url: imageRes.secure_url,
        public_id: imageRes.public_id,
      };
    }
    const plantilla = new Plantilla({
      nombre,
      category,
      descripcion,
      image: img,
      price,
      urlDowload,
    });
    await plantilla.save();
    res.status(201).json(plantilla);
  } catch (error) {
    res.status(500).json({ error: "Error al crear la plantilla", error });
  }
};

export const viewAllPlantillas = async (req, res) => {
  try {
    const plantillas = await Plantilla.find();
    if (plantillas.length === 0) {
      res.status(404).json({ error: "No hay plantillas" });
      return;
    }
    res.status(200).json(plantillas);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las plantillas" });
  }
};

export const viewPlantilla = async (req, res) => {
  try {
    const { id } = req.params;

    const plantilla = await Plantilla.findById(id);
    if (!plantilla) {
      res.status(404).json({ error: "No existe la plantilla" });
      return;
    }
    res.status(200).json(plantilla);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener la plantilla" });
  }
};

export const deletePlantilla = async (req, res) => {
  try {
    const { id } = req.params;
    const plantilla = await Plantilla.findByIdAndDelete(id);
    if (plantilla.image.public_id) {
      await deleteImage(plantilla.image.public_id);
    }
    res.status(200).json(plantilla);
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar la plantilla" });
  }
};
