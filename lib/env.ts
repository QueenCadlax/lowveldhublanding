/**
 * Environment Variable Validation
 * Ensures all required environment variables are set at runtime
 */

interface EnvironmentVariables {
  DATABASE_URL: string;
  RESEND_API_KEY: string;
  ADMIN_EMAIL: string;
}

/**
 * Validate required environment variables
 * @throws Error if any required variable is missing
 */
export function validateEnv(): EnvironmentVariables {
  const required = ['DATABASE_URL', 'RESEND_API_KEY', 'ADMIN_EMAIL'] as const;
  const missing: string[] = [];

  for (const variable of required) {
    if (!process.env[variable]) {
      missing.push(variable);
    }
  }

  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.join(', ')}\n` +
      'Please check your .env.local file and refer to .env.example'
    );
  }

  return {
    DATABASE_URL: process.env.DATABASE_URL!,
    RESEND_API_KEY: process.env.RESEND_API_KEY!,
    ADMIN_EMAIL: process.env.ADMIN_EMAIL!,
  };
}

/**
 * Get environment variable with optional default
 */
export function getEnv(key: string, defaultValue?: string): string {
  const value = process.env[key];
  if (!value && !defaultValue) {
    throw new Error(`Environment variable ${key} is not set`);
  }
  return value || defaultValue || '';
}
