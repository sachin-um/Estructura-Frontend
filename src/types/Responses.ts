type ValidationViolation = {
  field: string;
  message: string;
};

interface ValidatedResponse {
  validation_violations: ValidationViolation[];
}
