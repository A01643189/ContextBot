const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

// openai setup
const OpenAI = require("openai");
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Dynamically import NearbyyClient
import('@nearbyy/core').then(module => {
  const NearbyyClient = module.NearbyyClient;
  const nearbyy = new NearbyyClient({
    API_KEY: process.env.NEARBYY_API_KEY,
  });

  // Define the /chat route that uses NearbyyClient inside the then() block
  app.get("/chat", async (req, res) => {
    const { message } = req.query;

    try {
      const context = await nearbyy.semanticSearch({
        limit: 3,
        query: message,
      });

      if (!context.success) {
        console.error(context.error);
        return res.status(500).send("I'm sorry, I don't understand.");
      }

      const ctxMsg = context.data.items.map((item) => item.text).join("\n\n");
      const response = await openai.chat.completions.create({
        messages: [
          {
            role: "system",
            content: "If you are given relevant context, answer the users query with it. If the context does not include the answer, STATE that you don't have enough information to answer the query but still try to answer it without the context.",
          },
          {
            role: "system",
            content: "RELEVANT CONTEXT TO THE USER'S QUERY:\n " + ctxMsg,
          },
          {
            role: "user",
            content: message,
          },
        ],
        model: "gpt-3.5-turbo",
      });

      res.send(response.choices[0].message.content);
    } catch (error) {
      console.error(error);
      res.status(500).send("Error processing your request.");
    }
  });

  // Listen to the server only after the NearbyyClient is initialized
  app.listen(4000, () => {
    console.log("Server is running on port 4000");
  });

}).catch(err => {
  console.error("Failed to load @nearbyy/core module:", err);
});
