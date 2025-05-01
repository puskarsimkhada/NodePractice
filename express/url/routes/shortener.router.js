import { Router } from "express";
import { urlShortnerPost,urlGetShortner,urlShortcode } from "../controllers/postShortner.controller.js";

const router = Router();

router.get("/", urlGetShortner);
router.post("/", urlShortnerPost);
router.get("/:shortcode", urlShortcode);

export default router;
