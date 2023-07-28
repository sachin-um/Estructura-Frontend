export const violationsToErrorsTS = (violations: ValidationViolation[]) => {
  const result: Record<string, string> = {};
  violations.forEach((violation) => {
    result[violation.field] = violation.message;
  });
  return result;
};
