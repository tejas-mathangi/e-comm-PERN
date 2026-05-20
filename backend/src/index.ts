import express from "express";
import { ENV } from "./config/env";
import { clerkMiddleware } from "@clerk/express";
import cors from "cors";

const app = express();

app.use(cors({ origin: ENV.FRONTEND_URL, credentials: true }));
// `credentials: true` allows the frontend to send cookies to the backend so that we can authenticate the user.
app.use(clerkMiddleware()); // auth obj
app.use(express.json()); // parses JSON req bodies
app.use(express.urlencoded({ extended: true })); // parses form data (like html form)

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to productify API - PostgreSQL, Drizzle ORM & Clerk Auth",
    endpoints: {
      users: "/api/user",
      products: "/api/products",
      comments: "/api/comments",
    },
  });
});

app.listen(ENV.PORT, () => {
  console.log("Server is up and running on PORT:", ENV.PORT);
});
