/**
 * A custom React hook for managing retailItem data.
 *
 * @returns An object containing functions for adding, editing, and deleting retailItems, as well as fetching retailItem data.
 */
import { useCallback, useState } from 'react';

import API from '../../lib/API';
import { violationsToErrorsTS } from '../../utils/ViolationsTS';

export const useRetailItem = () => {
  const [retailItem, setRetailItem] = useState<RetailItem | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Fetches a retailItem by its ID and sets the state accordingly.
   * @param retailItemId - The ID of the retailItem to fetch.
   */
  const fetchRetailItem = useCallback(async (retailItemId: number) => {
    setIsLoading(true);
    const response = await API.get<RetailItem>(
      `/retailItems/item/${retailItemId}`,
    );
    if (response.status === 200) {
      setRetailItem(response.data);
    } else {
      setRetailItem(null);
    }
    setIsLoading(false);
  }, []);

  /**
   * Adds a new retailItem to the database.
   * @param retailItemAddRequest - The request object containing the retailItem data to be added.
   * @returns An object containing the result of the add operation.
   */
  const addRetailItem = useCallback(
    async (retailItemAddRequest: RetailItemAddOrUpdateRequest) => {
      const result: AddMethodResult<RetailItem> = {
        errors: {},
        item: null,
        success: false,
      };
      const response = await API.post<GenericAddOrUpdateResponse>(
        '/retailItems/add',
        retailItemAddRequest,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      if (response.status !== 200 || response.data.success === false) {
        if (response.status !== 200) {
          console.error('AddRetailItemResponse.status !== 200');
        }
        if (response.data.validation_violations) {
          result.errors = violationsToErrorsTS(
            response.data.validation_violations,
          );
        }
      } else {
        const id: number = response.data.id;
        result.item = (
          await API.get<RetailItem>(`/retailItems/item/${id}`)
        ).data;
        result.success = true;
      }
      return result;
    },
    [],
  );

  /**
   * Edit a retailItem by ID.
   * @param retailItemId - The ID of the retailItem to edit.
   * @param updatedRetailItem - The updated retailItem data.
   * @returns An object containing information about the update operation.
   */
  const editRetailItemById = useCallback(
    async (
      retailItemId: number,
      updatedRetailItem: RetailItemAddOrUpdateRequest,
    ) => {
      const result: UpdateMethodResult = {
        errors: {},
        success: false,
      };
      const response = await API.post<GenericAddOrUpdateResponse>(
        `/retailItems/update/${retailItemId}`,
        updatedRetailItem,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      if (response.status !== 200 || response.data.success === false) {
        if (response.status !== 200) {
          console.error('EditRetailItemResponse.status !== 200');
        }
        if (response.data.validation_violations) {
          result.errors = violationsToErrorsTS(
            response.data.validation_violations,
          );
        }
      } else {
        result.success = true;
        setRetailItem(
          (await API.get<RetailItem>(`/retailItems/item/${response.data.id}`))
            .data,
        );
      }
      return result;
    },
    [],
  );

  /**
   * Deletes a retailItem by its ID.
   * @param id - The ID of the retailItem to delete.
   * @returns A boolean indicating whether the deletion was successful or not.
   */
  const deleteRetailItemById = useCallback(async (id: number) => {
    const response = await API.delete<GenericDeleteResponse>(
      `/retailItems/delete/${id}`,
    );
    if (response.status !== 200 || response.data.success === false) {
      if (response.status !== 200) {
        console.error('DeleteRetailItemResponse.status !== 200');
      }
      alert('Error Deleting retailItem');
    } else {
      setRetailItem(null);
      return true;
    }
    return false;
  }, []);

  return {
    addRetailItem,
    deleteRetailItemById,
    editRetailItemById,
    getRetailItem: { fetchRetailItem, isLoading, retailItem },
  };
};
