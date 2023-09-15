import { useCallback, useState } from 'react';

import API from '../../lib/API';

/**
 * Custom hook to fetch customerRequests from the API.
 * @returns An object containing the fetched customerRequests, a function to fetch the customerRequests, and a boolean indicating if the fetch is in progress.
 */
export const useFetchCustomerRequests = () => {
  const [customerRequests, setCustomerRequests] = useState<CustomerRequest[]>(
    [],
  );
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Fetches customerRequests from the API
   */
  const fetchCustomerRequests = useCallback(
    async ({
      customerId,
      userRole,
    }: {
      customerId?: number;
      userRole?: Role;
    }) => {
      if (customerId && userRole) {
        throw new Error('Both User role  and customer Id provided');
      }
      setIsLoading(true);
      const response = await API.get<CustomerRequest[]>(
        '/customer-requests' +
          (customerId
            ? `/all-by-customer/${customerId}`
            : userRole
            ? `/all/${userRole}`
            : ''),
      );
      if (response.status === 200) {
        setCustomerRequests(response.data);
      } else {
        setCustomerRequests([]);
      }
      setIsLoading(false);
    },
    [],
  );

  return { customerRequests, fetchCustomerRequests, isLoading };
};
