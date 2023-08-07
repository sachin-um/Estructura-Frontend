/**
 * Adapting the validation_violations that come from the backend
 * @param violations comes from the backend
 * @returns set of violations compatible with Formik's setErrors
 */
export const violationsToErrorsTS = (violations: ValidationViolation[]) => {
  const result: Record<string, string> = {};
  violations.forEach((violation) => {
    result[violation.field] = violation.message;
  });
  return result;
};
