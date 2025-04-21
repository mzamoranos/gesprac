import express from "express";
import cors from "cors";
import testRoutes from "./routes/test.routes.js";
import "./db/connection.js";
//import { Pool } from "pg";  
import { config } from "dotenv";

// //const authRoutes = require("./routes/authRoutes");

config();

const app = express();

app.use(cors());
app.use(express.json());

// Ruta básica de prueba
app.get('/', (req, res) => {
    res.send('¡Servidor Express funcionando correctamente!');
  });
// Ruta de prueba
app.use("/api/test", testRoutes);

//app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor backend en puerto ${PORT}`);
});
