'use client';

export type SecurityRuleContext = {
  path: string;
  operation: 'get' | 'list' | 'create' | 'update' | 'delete' | 'write';
  requestResourceData?: any;
};

/**
 * A custom error class for Firestore permission errors that includes
 * rich context about the failed request. This helps in debugging security rules.
 */
export class FirestorePermissionError extends Error {
  public readonly context: SecurityRuleContext;
  public readonly serverError?: Error;

  constructor(context: SecurityRuleContext, serverError?: Error) {
    const message = `FirestoreError: Missing or insufficient permissions.`;
    super(message);
    this.name = 'FirestorePermissionError';
    this.context = context;
    this.serverError = serverError;

    // This is to make the stack trace more useful
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, FirestorePermissionError);
    }
  }

  public toJSON() {
    // This method is automatically called by JSON.stringify
    // and is used by Next.js to serialize the error for the dev overlay.
    return {
      name: this.name,
      message: this.message,
      context: this.context,
      // The original server error might contain circular references or be too large,
      // so we only serialize its message and name.
      serverError: this.serverError
        ? {
            name: this.serverError.name,
            message: this.serverError.message,
          }
        : undefined,
    };
  }
}
