interface UpdateMethodResult {
  errors: Record<string, string>;
  success: boolean;
}

interface AddMethodResult<T> {
  errors: Record<string, string>;
  item: T | null;
  success: boolean;
}
