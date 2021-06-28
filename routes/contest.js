import express from 'express';
const router = express.Router();

import {fetchall,fetch} from '../controllers/contest.js';

router.get("/fetchall",fetchall);
router.get("/fetch",fetch);
export default router;