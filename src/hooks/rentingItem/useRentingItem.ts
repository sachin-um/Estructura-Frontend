/**
 * A custom React hook for managing rentingItem data.
 *
 * @returns An object containing functions for adding, editing, and deleting rentingItems, as well as fetching rentingItem data.
 */
import { useCallback, useState } from 'react';

import API from '../../lib/API';
import { violationsToErrorsTS } from '../../utils/ViolationsTS';

export const useRentingItem = () => {
  const [rentingItem, setRentingItem] = useState<RentingItem | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Fetches a rentingItem by its ID and sets the state accordingly.
   * @param rentingItemId - The ID of the rentingItem to fetch.
   */
  const fetchRentingItem = useCallback(async (rentingItemId: number) => {
    setIsLoading(true);
    const response = await API.get<RentingItem>(
      `/renting-items/item/${rentingItemId}`,
    );
    if (response.status === 200) {
      setRentingItem(response.data);
    } else {
      setRentingItem(null);
    }
    setIsLoading(false);
  }, []);

  /**
   * Adds a new rentingItem to the database.
   * @param rentingItemAddRequest - The request object containing the rentingItem data to be added.
   * @returns An object containing the result of the add operation.
   */
  const addRentingItem = useCallback(
    async (rentingItemAddRequest: RentingItemAddOrUpdateRequest) => {
      const result: AddMethodResult<RentingItem> = {
        errors: {},
        item: null,
        success: false,
      };
      const response = await API.post<GenericAddOrUpdateResponse>(
        '/renting-items/add',
        rentingItemAddRequest,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      if (response.status !== 200 || response.data.success === false) {
        if (response.status !== 200) {
          console.error('AddRentingItemResponse.status !== 200');
        }
        if (response.data.validation_violations) {
          result.errors = violationsToErrorsTS(
            response.data.validation_violations,
          );
        }
      } else {
        const id: number = response.data.id;
        result.item = (
          await API.get<RentingItem>(`/renting-items/item/${id}`)
        ).data;
        result.success = true;
      }
      return result;
    },
    [],
  );

  /**
   * Edit a rentingItem by ID.
   * @param rentingItemId - The ID of the rentingItem to edit.
   * @param updatedRentingItem - The updated rentingItem data.
   * @returns An object containing information about the update operation.
   */
  const editRentingItemById = useCallback(
    async (
      rentingItemId: number,
      updatedRentingItem: RentingItemAddOrUpdateRequest,
    ) => {
      const result: UpdateMethodResult = {
        errors: {},
        success: false,
      };
      const response = await API.post<GenericAddOrUpdateResponse>(
        `/renting-items/update/${rentingItemId}`,
        updatedRentingItem,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      if (response.status !== 200 || response.data.success === false) {
        if (response.status !== 200) {
          console.error('EditRentingItemResponse.status !== 200');
        }
        if (response.data.validation_violations) {
          result.errors = violationsToErrorsTS(
            response.data.validation_violations,
          );
        }
      } else {
        result.success = true;
        setRentingItem(
          (
            await API.get<RentingItem>(
              `/renting-items/item/${response.data.id}`,
            )
          ).data,
        );
      }
      return result;
    },
    [],
  );

  /**
   * Deletes a rentingItem by its ID.
   * @param id - The ID of the rentingItem to delete.
   * @returns A boolean indicating whether the deletion was successful or not.
   */
  const deleteRentingItemById = useCallback(async (id: number) => {
    const response = await API.delete<GenericDeleteResponse>(
      `/renting-items/delete/${id}`,
    );
    if (response.status !== 200 || response.data.success === false) {
      if (response.status !== 200) {
        console.error('DeleteRentingItemResponse.status !== 200');
      }
      alert('Error Deleting rentingItem');
    } else {
      setRentingItem(null);
      return true;
    }
    return false;
  }, []);

  return {
    addRentingItem,
    deleteRentingItemById,
    editRentingItemById,
    getRentingItem: { fetchRentingItem, isLoading, rentingItem },
  };
};
