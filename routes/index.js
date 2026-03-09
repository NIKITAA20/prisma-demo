import { Router } from "express";
import UserRoutes from "./user.routes.js";

const router = Router();

router.use('/api/users', UserRoutes);

export default router;