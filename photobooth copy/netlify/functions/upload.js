const { createClient } = require("@supabase/supabase-js");

const SUPABASE_URL = process.env.SUPABASE_URL || "https://urimlfiyqhyndsqtbual.supabase.co";
const SUPABASE_SECRET_KEY = process.env.SUPABASE_SECRET_KEY;
const BUCKET_NAME = process.env.SUPABASE_BUCKET_NAME || "photos";

exports.handler = async function(event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" })
    };
  }

  if (!SUPABASE_SECRET_KEY) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Missing SUPABASE_SECRET_KEY" })
    };
  }

  try {
    const { imageData } = JSON.parse(event.body || "{}");

    if (!imageData) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing imageData" })
      };
    }

    const base64 = imageData.replace(/^data:image\/(png|jpeg|jpg);base64,/, "");
    const buffer = Buffer.from(base64, "base64");
    const fileName = `photo-${Date.now()}.jpg`;

    const supabase = createClient(SUPABASE_URL, SUPABASE_SECRET_KEY);

    const { error } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(fileName, buffer, {
        contentType: "image/jpeg",
        upsert: false
      });

    if (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: error.message })
      };
    }

    const { data } = supabase.storage
      .from(BUCKET_NAME)
      .getPublicUrl(fileName);

    return {
      statusCode: 200,
      body: JSON.stringify({ url: data.publicUrl })
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};
