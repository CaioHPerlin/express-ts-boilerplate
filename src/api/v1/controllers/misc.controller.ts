import { Request, Response } from 'express';

export const ping = (_: Request, res: Response): void => {
  res.send(`Pong!`);
};
