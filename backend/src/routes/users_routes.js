import { Router } from "express";
import {addToHistory, getUserHistory, login,register} from "../controllers/user.controllers.js"

const router = Router();

router.route("/login").post(login)
router.route("/register").post(register)
router.route("/add_to_activity").post(addToHistory)
router.route("/get_all_activity").post(getUserHistory)
// router.route("/login")

export default router;