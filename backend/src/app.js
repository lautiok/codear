import express from "express";
import { config } from "./config/config.js";
import PlantillasRoutes from "./routes/Plantillas.routes.js";
import { connectDB } from "./config/db.js";
import fileUpload from "express-fileupload";
import { limit } from "./utils/handleLimit.js";
import orderRoutes from "./routes/Order.routes.js";
const app = express();
const PORT = config.port;

app.use(express.json());
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: './upload'
}));


app.use("/api/plantillas",limit , PlantillasRoutes);
app.use("/api/ordenes",limit, orderRoutes);

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
