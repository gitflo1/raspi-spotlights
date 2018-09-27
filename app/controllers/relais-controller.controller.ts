import { Router, Request, Response } from 'express';

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
    
    res.send('Relais started!')
})




export const RelaisControllerController: Router = router;