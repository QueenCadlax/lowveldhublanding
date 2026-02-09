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
