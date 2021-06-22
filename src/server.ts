import express, { request } from "express";

const app = express();

app.get("/test", (request, response) => {
    return response.send("Olá teste")
});

app.post("/test-post", (request, response) => {
    return response.send("Olá test post")
});

app.listen(3000, () => console.log("Server is running!"))