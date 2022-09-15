export class BaseError extends Error {
  constructor(message: string, error?: unknown) {
    super(message);

    this.name = 'BaseError';

    if (error) {
      this.log(error);
    }
  }

  private log(error: unknown) {
    console.error(error);
  }
}
