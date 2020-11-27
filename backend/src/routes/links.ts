//ROUTER
import { Router } from 'express';
import linksRouter from "../controllers/links";
const router = Router();


router.post('/links', linksRouter.postLink);

router.get('/links/:code', linksRouter.getLink);

router.get('/links/:code/stats', linksRouter.hitLink);


export default router;