/**
 * Input Validation Utilities
 * Provides standardized validation functions for common input types
 */

/**
 * Email validation using RFC 5322 simplified pattern
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
}

/**
 * Sanitize and normalize email (lowercase, trim)
 */
export function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

/**
 * Sanitize string input to prevent injection attacks
 */
export function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>\"']/g, '') // Remove HTML/script characters
    .substring(0, 1000); // Prevent excessively long inputs
}

/**
 * Validate email strictly with sanitization
 */
export function validateAndSanitizeEmail(email: string): { isValid: boolean; sanitized: string } {
  const sanitized = sanitizeInput(email).toLowerCase();
  const isValid = validateEmail(sanitized);
  return { isValid, sanitized };
}

/**
 * Simple string validation
 */
export function isValidString(value: unknown, minLength = 1, maxLength = 1000): boolean {
  return (
    typeof value === 'string' &&
    value.trim().length >= minLength &&
    value.length <= maxLength
  );
}

/**
 * Validate URL format
 */
export function validateUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Validate phone number (basic international format)
 */
export function validatePhoneNumber(phone: string): boolean {
  const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
}

/**
 * Batch validation result
 */
export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

/**
 * Validate object against schema
 */
export function validateObject<T>(
  obj: unknown,
  schema: Record<keyof T, (value: unknown) => boolean>
): ValidationResult {
  const errors: string[] = [];

  if (typeof obj !== 'object' || obj === null) {
    return {
      isValid: false,
      errors: ['Input must be a valid object'],
    };
  }

  for (const [key, validator] of Object.entries(schema)) {
    const value = (obj as any)[key];
    if (!validator(value)) {
      errors.push(`Invalid value for field: ${key}`);
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

/**
 * Simple in-memory rate limiting store
 * Note: For production, use Redis or similar
 */
class RateLimitStore {
  private store: Map<string, { count: number; resetTime: number }> = new Map();
  private readonly windowMs: number;
  private readonly maxRequests: number;

  constructor(windowMs = 60000, maxRequests = 5) {
    this.windowMs = windowMs;
    this.maxRequests = maxRequests;
    // Cleanup old entries every minute
    setInterval(() => this.cleanup(), 60000);
  }

  private cleanup(): void {
    const now = Date.now();
    for (const [key, entry] of this.store.entries()) {
      if (entry.resetTime < now) {
        this.store.delete(key);
      }
    }
  }

  isAllowed(identifier: string): boolean {
    const now = Date.now();
    const entry = this.store.get(identifier);

    if (!entry || entry.resetTime < now) {
      // First request or window expired
      this.store.set(identifier, { count: 1, resetTime: now + this.windowMs });
      return true;
    }

    if (entry.count < this.maxRequests) {
      entry.count++;
      return true;
    }

    return false;
  }
}

export const signupRateLimiter = new RateLimitStore(60000, 5); // 5 requests per minute
