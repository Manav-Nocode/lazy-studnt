import { Request, Response, NextFunction } from "express";
declare global {
    namespace Express {
        interface Request {
            id?: string;
            userId?: string;
        }
    }
}
export declare function authMiddleware(req: Request, res: Response, next: NextFunction): Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=authMiddle.d.ts.map