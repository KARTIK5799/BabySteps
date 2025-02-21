import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/db.js";
// import doctorRoutes from "./routes/doctorRoutes.js";
// import appointmentRoutes from "./routes/appointmentRoutes.js";

dotenv.config();
connectDb();

const app = express();

app.use(express.json());
app.use(cors());

// app.use("/doctors", doctorRoutes);
// app.use("/appointments", appointmentRoutes);


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
