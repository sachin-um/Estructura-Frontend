import { useCallback, useState } from 'react';

import API from '../../lib/API';

/**
 * Custom hook to fetch customerRequestResponses from the API.
 * @returns An object containing the fetched customerRequestResponses, a function to fetch the customerRequestResponses, and a boolean indicating if the fetch is in progress.
 */
export const useFetchCustomerRequestResponses = () => {
  const [customerRequestResponses, setCustomerRequestResponses] = useState<
    CustomerRequestResponse[]
  >([]);
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Fetches customerRequestResponses from the API
   */
  const fetchCustomerRequestResponses = useCallback(
    async ({
      providerId,
      requestId,
    }: {
      providerId?: number;
      requestId?: number;
    }) => {
      if (requestId && providerId) {
        throw new Error('Both provider and reqId given');
      }
      setIsLoading(true);
      const response = await API.get<CustomerRequestResponse[]>(
        'response' +
          (requestId
            ? `/all/request/${requestId}`
            : `/all/service-provider/${providerId}`),
      );
      if (response.status === 200) {
        setCustomerRequestResponses(response.data);
      } else {
        setCustomerRequestResponses([]);
      }
      setIsLoading(false);
    },
    [],
  );

  return { customerRequestResponses, fetchCustomerRequestResponses, isLoading };
};
