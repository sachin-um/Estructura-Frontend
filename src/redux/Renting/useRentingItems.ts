import type { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';

import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { violationsToErrorsTS } from '../../utils/ViolationsTS';
import { useUsers } from '../UserInfo/useUsers';
import {
  addRentingItemThunk,
  deleteRentingItemThunk,
  editRentingItemThunk,
  fetchRentingItemsThunk,
  getRentingItemsStatus,
  selectAllRentingItems,
} from './RentingItemsReducer';

export const useRentingItems = () => {
  const rentingItems = useSelector(selectAllRentingItems);
  const rentingItemsStatus = useSelector(getRentingItemsStatus);

  const dispatchRentingItems: ThunkDispatch<RentingItem[], void, AnyAction> =
    useDispatch();

  useEffect(() => {
    if (rentingItemsStatus === 'idle') {
      dispatchRentingItems(fetchRentingItemsThunk());
    }
  }, [dispatchRentingItems, rentingItemsStatus]);

  const { currentUser } = useUsers();

  /**
   * ***CREATE***
   * Await this with the add request
   * ```ts
   * addRentingItem(values).then((added)=>{
   *   if (added.id !== -1) {
   *     ...
   *   } else if (added.errors) {
   *     setErrors(added.errors)
   *   }
   * })
   * ```
   * @returns errors?: Record for formikErrors
   * @returns id: -1 if failed, inserted Id if succeeded
   */
  const addRentingItem = useCallback(
    async (addRentingItemRequest: RentingItemAddOrUpdateRequest) => {
      const result: { errors?: Record<string, string>; id: number } = {
        id: -1,
      };
      try {
        const value = await dispatchRentingItems(
          addRentingItemThunk(addRentingItemRequest),
        );
        if (addRentingItemThunk.fulfilled.match(value)) {
          console.log('Added RentingItem');
          result.id = value.payload.id;
        } else if (addRentingItemThunk.rejected.match(value)) {
          const response = value.payload as GenericAddOrUpdateResponse;
          if (response.validation_violations) {
            result.errors = violationsToErrorsTS(
              response.validation_violations,
            );
          } else {
            console.log('Adding rejected for unspecified reason');
          }
        }
      } catch (error) {
        console.log('Error while adding rentingItem', error);
      }
      return result;
    },
    [dispatchRentingItems],
  );

  /**
   * ***UPDATE***
   * Await this with the edit request
   * ```ts
   * editRentingItemById(id,values).then((edited)=>{
   *   if (edited.success) {
   *     ...
   *   } else if (edited.errors) {
   *     setErrors(edited.errors)
   *   }
   * })
   * ```
   * @returns errors?: Record for formikErrors
   * @returns success: boolean indicating success or failure
   */
  const editRentingItemById = useCallback(
    async (
      rentingItemId: number,
      editedRentingItemRequest: RentingItemAddOrUpdateRequest,
    ) => {
      const result: { errors?: Record<string, string>; success: boolean } = {
        success: false,
      };
      try {
        const value = await dispatchRentingItems(
          editRentingItemThunk({
            rentingItemId: rentingItemId,
            updatedRentingItem: editedRentingItemRequest,
          }),
        );
        if (editRentingItemThunk.fulfilled.match(value)) {
          console.log('Edited RentingItem!');
          result.success = true;
        } else if (editRentingItemThunk.rejected.match(value)) {
          const response = value.payload as GenericAddOrUpdateResponse;
          if (response.validation_violations) {
            console.log('Validation Violations detected');
            result.errors = violationsToErrorsTS(
              response.validation_violations,
            );
          } else {
            console.log('Edit rejected for unspecified reason');
          }
        }
      } catch (error) {
        console.log('Error while editing rentingItem', error);
      }
      return result;
    },
    [dispatchRentingItems],
  );

  /**
   * ***DELETE***
   * Specify an Id to delete a rentingItem
   * ```ts
   * deleteRentingItemById(id).then((deleted)=>{
   *   if (deleted) {
   *     ...
   *   } else {
   *     ...
   *   }
   * })
   * ```
   * @param id: Id of the rentingItem you want to delete
   * @returns boolean
   */
  const deleteRentingItemById = useCallback(
    async (id: number) => {
      try {
        const value = await dispatchRentingItems(deleteRentingItemThunk(id));
        if (deleteRentingItemThunk.fulfilled.match(value)) {
          console.log('Deleted rentingItem');
          return true;
        } else {
          console.log('Failed to delete rentingItem');
        }
      } catch (error) {
        console.log('Error while deleting rentingItem', error);
      }
      return false;
    },
    [dispatchRentingItems],
  );

  /**
   * Select a rentingItem with Id
   * @param id Id of the rentingItem you would like to select
   * @returns RentingItem if exists else undefined
   */
  const selectRentingItemById = (id: number) =>
    rentingItems.find((rentingItem) => rentingItem.id === id);

  /**
   * Select a rentingItem with Id
   * @param userId Id of the user whose rentingItems you would like to select
   * @returns RentingItem array
   */
  const selectRentingItemByUserId = (userId: number) =>
    rentingItems.filter((rentingItem) => rentingItem.createdBy === userId);

  const rentingItemsOfCurrentUser = rentingItems.filter(
    (rentingItem) => rentingItem.createdBy === currentUser?.id,
  );

  return {
    addRentingItem,
    deleteRentingItemById,
    editRentingItemById,
    rentingItems,
    rentingItemsOfCurrentUser,
    rentingItemsStatus,
    selectRentingItemById,
    selectRentingItemByUserId,
  } as const;
};
