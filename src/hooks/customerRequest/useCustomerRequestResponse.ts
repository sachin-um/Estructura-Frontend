import { useCallback, useState } from 'react';

import API from '../../lib/API';
import { violationsToErrorsTS } from '../../utils/ViolationsTS';

export const useCustomerRequestResponse = () => {
  const [customerRequestResponse, setCustomerRequestResponse] =
    useState<CustomerRequestResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchCustomerRequestResponse = useCallback(
    async (customerRequestId: number) => {
      setIsLoading(true);
      const response = await API.get<CustomerRequestResponse>(
        `/response/${customerRequestId}`,
      );
      if (response.status === 200) {
        setCustomerRequestResponse(response.data);
      } else {
        setCustomerRequestResponse(null);
      }
      setIsLoading(false);
    },
    [],
  );

  const addCustomerRequestResponse = useCallback(
    async (customerRequestAddRequest: SendResponseRequest) => {
      const result: AddMethodResult<CustomerRequestResponse> = {
        errors: {},
        item: null,
        success: false,
      };
      const response = await API.post<GenericAddOrUpdateResponse>(
        '/response/add',
        customerRequestAddRequest,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      if (response.status !== 200 || response.data.success === false) {
        if (response.status !== 200) {
          console.error('AddCustomerRequestResponseResponse.status !== 200');
        }
        if (response.data.validation_violations) {
          result.errors = violationsToErrorsTS(
            response.data.validation_violations,
          );
        }
      } else {
        const id: number = response.data.id;
        result.item = (
          await API.get<CustomerRequestResponse>(`/response/${id}`)
        ).data;
        result.success = true;
      }
      console.log(response, result);
      return result;
    },
    [],
  );

  const acceptOrDecline = useCallback(async (ActionRequest: ActionRequest) => {
    const response = API.post<GenericResponse>(
      '/response/action',
      ActionRequest,
    ).then((res) => {
      return res.data.success;
    });
    return response;
  }, []);

  return {
    acceptOrDecline,
    addCustomerRequestResponse,
    getResponse: {
      customerRequestResponse,
      fetchCustomerRequestResponse,
      isLoading,
    },
  };
};
