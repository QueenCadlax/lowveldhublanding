/**
 * Admin Utilities for LowveldHub
 * Provides helper functions for managing early access signups
 */

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * Export all signups as CSV format
 */
export async function exportSignupsAsCSV(): Promise<string> {
  const signups = await prisma.earlyAccessSignup.findMany({
    orderBy: { createdAt: 'desc' },
  });

  const headers = ['Email', 'Signup Date'];
  const rows = signups.map((signup) => [
    signup.email,
    new Date(signup.createdAt).toISOString().split('T')[0],
  ]);

  const csvContent = [
    headers.join(','),
    ...rows.map((row) => row.join(',')),
  ].join('\n');

  return csvContent;
}

/**
 * Get signup statistics
 */
export async function getSignupStats() {
  const total = await prisma.earlyAccessSignup.count();
  
  const last24Hours = await prisma.earlyAccessSignup.count({
    where: {
      createdAt: {
        gte: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
    },
  });

  const last7Days = await prisma.earlyAccessSignup.count({
    where: {
      createdAt: {
        gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
      },
    },
  });

  return {
    total,
    last24Hours,
    last7Days,
    lastUpdated: new Date().toISOString(),
  };
}

/**
 * Get all signups with pagination
 */
export async function getSignups(page: number = 1, limit: number = 50) {
  const skip = (page - 1) * limit;

  const signups = await prisma.earlyAccessSignup.findMany({
    skip,
    take: limit,
    orderBy: { createdAt: 'desc' },
  });

  const total = await prisma.earlyAccessSignup.count();

  return {
    signups,
    pagination: {
      page,
      limit,
      total,
      pages: Math.ceil(total / limit),
    },
  };
}

/**
 * Find signup by email
 */
export async function findSignupByEmail(email: string) {
  return prisma.earlyAccessSignup.findUnique({
    where: { email: email.toLowerCase().trim() },
  });
}

/**
 * Delete a signup (use cautiously)
 */
export async function deleteSignup(email: string) {
  return prisma.earlyAccessSignup.delete({
    where: { email: email.toLowerCase().trim() },
  });
}

/**
 * Check if email exists
 */
export async function emailExists(email: string): Promise<boolean> {
  const signup = await findSignupByEmail(email);
  return !!signup;
}

// Example usage (for admin scripts):
// import { exportSignupsAsCSV, getSignupStats } from './lib/admin.ts';
// 
// (async () => {
//   const csv = await exportSignupsAsCSV();
//   console.log(csv);
//   
//   const stats = await getSignupStats();
//   console.log(stats);
// })();
