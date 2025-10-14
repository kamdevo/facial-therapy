import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import fetch from "node-fetch";


export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

 




// Endpoint to fetch TikTok user videos
app.get("/tiktok/:user", async (req, res) => {
  const { user } = req.params;
  const url = `https://www.tiktok.com/@${user}`;

  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0"
      }
    });
    const html = await response.text();

    // Buscar el JSON dentro del HTML
    const jsonMatch = html.match(/<script id="SIGI_STATE" type="application\/json">(.*?)<\/script>/);
    if (!jsonMatch) return res.status(404).json({ error: "No se pudo obtener el perfil" });

    const jsonData = JSON.parse(jsonMatch[1]);
    const videos = Object.values(jsonData.ItemModule);

    res.json(videos);
  } catch (e) {
    res.status(500).json({ error: "Error al obtener videos" });
  }
});

app.get("/api/demo", handleDemo);



  return app;
}
