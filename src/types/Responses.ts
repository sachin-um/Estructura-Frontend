type ValidationViolation = {
  field: string;
  message: string;
};

interface ValidatedResponse {
  validation_violations: ValidationViolation[];
}

interface GenericAddOrUpdateResponse extends ValidatedResponse {
  id: number;
  message: null | string;
  success: boolean;
}

interface GenericResponse extends ValidatedResponse {
  message: null | string;
  success: boolean;
}

interface GenericDeleteResponse extends ValidatedResponse {
  message: null | string;
  success: boolean;
}
