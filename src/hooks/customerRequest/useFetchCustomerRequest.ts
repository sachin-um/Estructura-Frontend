import { useCallback, useState } from 'react';

import API from '../../lib/API';
import { violationsToErrorsTS } from '../../utils/ViolationsTS';

export const useFetchCustomerRequest = () => {
  const [customerRequest, setCustomerRequest] = useState<CustomRequest | null>(
    null,
  );
};
