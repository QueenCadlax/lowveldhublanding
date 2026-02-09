/**
 * Consistent API Response Handling
 * Provides standardized response formats
 */

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}

/**
 * Success response
 */
export function successResponse<T>(
  message: string,
  data?: T
): ApiResponse<T> {
  return {
    success: true,
    message,
    ...(data && { data }),
  };
}

/**
 * Error response
 */
export function errorResponse(
  message: string,
  error?: string
): ApiResponse {
  return {
    success: false,
    message,
    ...(error && { error }),
  };
}

/**
 * HTTP Status Codes
 */
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  CONFLICT: 409,
  INTERNAL_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
} as const;
