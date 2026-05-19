import express from "express";
import { ENV } from "./config/env";
import { clerkMiddleware } from "@clerk/express";

const app = express();

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
