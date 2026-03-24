import { Request, Response } from 'express';

export const getClaimsStatus = async (req: Request, res: Response) => {
    try {
        const { claimId } = req.params;
        // Business logic or service call for Node.js backend
        res.status(200).json({ status: 'SUCCESS', claimId });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
