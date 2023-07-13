import Router from "express";

const router = Router();

router.get("/", () => console.log("Here we are!"));

export { router };
