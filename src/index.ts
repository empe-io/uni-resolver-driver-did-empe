import express from "express";
import { PORT } from "./config";
import { identifiers } from "./routes/identifiers";

const app = express();

// Health check endpoint
app.get("/healthz", (_req, res) => res.json({ status: "ok" }));

// DID resolution endpoint
app.use("/1.0/identifiers", identifiers);

// Start the server
app.listen(PORT, () => console.log(`did:empe driver listening on :${PORT}`));