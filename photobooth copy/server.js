const express = require("express");
const cors = require("cors");
const { createClient } = require("@supabase/supabase-js");

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Private-Network", "true");
  next();
});

app.get("/health", (req, res) => {
  res.send("server is working");
});

app.use(cors());
app.use(express.json({ limit: "25mb" }));

const SUPABASE_URL = process.env.SUPABASE_URL || "https://urimlfiyqhyndsqtbual.supabase.co";
const SUPABASE_SECRET_KEY = process.env.SUPABASE_SECRET_KEY;
const BUCKET_NAME = process.env.SUPABASE_BUCKET_NAME || "photos";

if (!SUPABASE_SECRET_KEY) {
  console.error("Missing SUPABASE_SECRET_KEY environment variable.");
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SECRET_KEY);

app.post("/upload", async (req, res) => {
  try {
    const { imageData } = req.body;

    const base64 = imageData.replace(/^data:image\/(png|jpeg|jpg);base64,/, "");
    const buffer = Buffer.from(base64, "base64");

    const fileName = `photo-${Date.now()}.jpg`;

    const { error } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(fileName, buffer, {
        contentType: "image/jpeg",
        upsert: false
      });

    if (error) {
      res.status(500).json({ error: error.message });
      return;
    }

    const { data } = supabase.storage
      .from(BUCKET_NAME)
      .getPublicUrl(fileName);

    res.json({ url: data.publicUrl });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => {
  console.log("Photobooth upload server running on http://localhost:3000");
});
   
