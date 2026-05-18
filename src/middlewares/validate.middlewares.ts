import { Request, Response, NextFunction } from 'express';
import { AnyZodObject } from 'zod';
import Logger from '../config/logger';

export const validate = (schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req.body);
      next();
    } catch (error: any) {
      Logger.warn('Tentativa de envio de dados invalidos barrada pelo zod.');
      return res.status(400).json({
        error: 'Dados de entrada invalidos.',
        details: error.errors,
      });
    }
  };