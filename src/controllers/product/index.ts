import { Request, Response } from "express"

export const getAllProducts = (req: Request, res: Response) => {
  res.status(200).send({message: 'Successfully got the products'})
}
