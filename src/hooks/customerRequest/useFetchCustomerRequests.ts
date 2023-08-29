import { useCallback, useState } from 'react';

import API from '../../lib/API';

export const useFetchCustomerRequests = () => {
  const [customerRequests, setCustomerRequests] = useState<CustomRequest[]>([]);
};
