const violationsToErrors = (violations) => {
  const errors = {};
  violations.forEach((violation) => {
    errors[violation.field] = violation.message;
  });
  return errors;
};

export { violationsToErrors };
