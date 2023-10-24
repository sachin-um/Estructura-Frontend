import { useCallback, useState } from 'react';

import API from '../../lib/API';
import { violationsToErrorsTS } from '../../utils/ViolationsTS';

export const useCustomerRequest = () => {
  const [customerRequest, setCustomerRequest] =
    useState<CustomerRequest | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  /**
   * Fetches a customerRequest by its ID and sets the state accordingly.
   * @param customerRequestId - The ID of the customerRequest to fetch.
   */
  const fetchCustomerRequest = useCallback(
    async (customerRequestId: number) => {
      setIsLoading(true);
      const response = await API.get<CustomerRequest>(
        `/customer-requests/customer-request/${customerRequestId}`,
      );
      if (response.status === 200) {
        setCustomerRequest(response.data);
      } else {
        setCustomerRequest(null);
      }
      setIsLoading(false);
    },
    [],
  );

  /**
   * Adds a new customerRequest to the database.
   * @param customerRequestAddRequest - The request object containing the customerRequest data to be added.
   * @returns An object containing the result of the add operation.
   */
  const addCustomerRequest = useCallback(
    async (customerRequestAddRequest: CustomerRequestAddOrUpdateRequest) => {
      const result: AddMethodResult<CustomerRequest> = {
        errors: {},
        item: null,
        success: false,
      };
      const response = await API.post<GenericAddOrUpdateResponse>(
        '/customer-requests/add',
        customerRequestAddRequest,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      if (response.status !== 200 || response.data.success === false) {
        if (response.status !== 200) {
          console.error('AddCustomerRequestResponse.status !== 200');
        }
        if (response.data.validation_violations) {
          result.errors = violationsToErrorsTS(
            response.data.validation_violations,
          );
        }
      } else {
        const id: number = response.data.id;
        result.item = (
          await API.get<CustomerRequest>(
            `/customer-requests/customer-request/${id}`,
          )
        ).data;
      }
      return result;
    },
    [],
  );

  /**
   * Deletes a customerRequest by its ID.
   * @param id - The ID of the customerRequest to delete.
   * @returns A boolean indicating whether the deletion was successful or not.
   */
  const deleteCustomerRequestById = useCallback(async (id: number) => {
    const response = await API.delete<GenericDeleteResponse>(
      `/customer-requests/delete/${id}`,
    );
    if (response.status !== 200 || response.data.success === false) {
      if (response.status !== 200) {
        console.error('DeleteCustomerRequestResponse.status !== 200');
      }
      alert('Error Deleting customerRequest');
    } else {
      setCustomerRequest(null);
      return true;
    }
    return false;
  }, []);

  return {
    addCustomerRequest,
    deleteCustomerRequestById,
    getCustomerRequest: { customerRequest, fetchCustomerRequest, isLoading },
  };
};
