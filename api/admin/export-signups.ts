import { PrismaClient } from '@prisma/client';
import { HTTP_STATUS, successResponse, errorResponse } from '../lib/api-response';

const prisma = new PrismaClient();

/**
 * Admin endpoint to export signups
 * GET /api/admin/export-signups?token=YOUR_ADMIN_TOKEN
 * 
 * Security: Uses a simple token check for basic protection
 * For production, implement proper authentication
 */
export default async function handler(req: any, res: any) {
  // Only accept GET requests
  if (req.method !== 'GET') {
    return res.status(HTTP_STATUS.BAD_REQUEST).json(
      errorResponse('Method not allowed. Use GET.')
    );
  }

  // Simple token-based authentication
  // In production, use proper OAuth/JWT
  const adminToken = process.env.ADMIN_EXPORT_TOKEN;
  const { token } = req.query;

  if (!adminToken || token !== adminToken) {
    return res.status(401).json(
      errorResponse('Unauthorized. Invalid or missing admin token.')
    );
  }

  try {
    const signups = await prisma.earlyAccessSignup.findMany({
      orderBy: { createdAt: 'desc' },
    });

    // Generate CSV format
    const headers = ['Email', 'Signup Date'];
    const rows = signups.map((signup: any) => [
      signup.email,
      new Date(signup.createdAt).toISOString().split('T')[0],
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map((row: string[]) => row.join(',')),
    ].join('\n');

    // Get statistics
    const total = signups.length;
    const last24Hours = signups.filter(
      (signup: any) =>
        new Date(signup.createdAt).getTime() > Date.now() - 24 * 60 * 60 * 1000
    ).length;

    res.setHeader('Content-Type', 'text/csv');
    res.setHeader(
      'Content-Disposition',
      `attachment; filename="lowveldhub-signups-${new Date().toISOString().split('T')[0]}.csv"`
    );

    const output = `${csvContent}\n\n# Stats\n# Total: ${total}\n# Last 24h: ${last24Hours}`;
    return res.status(HTTP_STATUS.OK).send(output);
  } catch (error: any) {
    console.error('Export error:', error);
    return res.status(HTTP_STATUS.INTERNAL_ERROR).json(
      errorResponse('Failed to export signups')
    );
  } finally {
    await prisma.$disconnect();
  }
}
