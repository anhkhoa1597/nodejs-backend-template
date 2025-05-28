import { logger } from "../utils/logger.js";

// Base custom error class
export class CustomError extends Error {
  constructor(message, name = "CustomError", statusCode = 500, details = "") {
    super(message);
    this.name = name;
    this.statusCode = statusCode;
    this.details = details || message;
  }
}

// Authentication error
export class AuthenticationError extends CustomError {
  constructor(message = "Authentication required") {
    super(
      message,
      "AuthenticationError",
      401,
      "No valid authentication credentials provided."
    );
  }
}

// Authorization error
export class AuthorizationError extends CustomError {
  constructor(message = "Forbidden") {
    super(
      message,
      "AuthorizationError",
      403,
      "You do not have permission to access this resource."
    );
  }
}

// Validation error
export class ValidationError extends CustomError {
  constructor(message = "Validation failed") {
    super(
      message,
      "ValidationError",
      400,
      "Request data did not pass validation."
    );
  }
}

// Not found error
export class NotFoundError extends CustomError {
  constructor(message = "Resource not found") {
    super(
      message,
      "NotFoundError",
      404,
      "The requested resource could not be found."
    );
  }
}

// Bad request error
export class BadRequestError extends CustomError {
  constructor(message = "Bad request") {
    super(
      message,
      "BadRequestError",
      400,
      "The request could not be understood or was missing required parameters."
    );
  }
}

// Example: Internal server error
export class InternalServerError extends CustomError {
  constructor(message = "Internal server error") {
    super(
      message,
      "InternalServerError",
      500,
      "An unexpected error occurred on the server."
    );
  }
}

// Centralized error handler middleware
export const errorHandler = (err, req, res, next) => {
  const isProduction = process.env.NODE_ENV === "production";

  // If not an Error instance, wrap it
  if (!(err instanceof Error)) {
    err = new InternalServerError();
  }

  // Log the error
  logger.error(`${err.name || "UnknownError"}: ${err.message}`, {
    method: req.method,
    url: req.originalUrl,
    body: req.body,
    stack: err.stack,
  });

  // If it's a CustomError, use its properties
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({
      status: err.name,
      statusCode: err.statusCode,
      message: err.message,
      details: isProduction ? undefined : err.details,
      timestamp: new Date().toISOString(),
    });
  }

  res.status(500).json({
    status: "InternalServerError",
    statusCode: 500,
    message: "An unexpected error occurred.",
    details: isProduction ? undefined : err.message,
    timestamp: new Date().toISOString(),
  });
};
