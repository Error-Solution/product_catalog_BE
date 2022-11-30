import { Request, Response } from 'express';
import * as phoneServices from '../services/phonesService';

export const getAllPhone = async(req: Request, res: Response) => {
    const paginatedList = phoneServices.allPhoneService(req.query)

    if(!paginatedList.length) {
        res.sendStatus(404);
    }

    res.send(paginatedList)
}
