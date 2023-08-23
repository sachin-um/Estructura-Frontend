import type { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';

import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { violationsToErrorsTS } from '../../utils/ViolationsTS';
import { useUsers } from '../UserInfo/useUsers';
import {
  addRetailItemThunk,
  deleteRetailItemThunk,
  editRetailItemThunk,
  fetchRetailItemsThunk,
  getRetailItemsStatus,
  selectAllRetailItems,
} from './RetailItemsReducer';

export const useRetailItems = () => {
  const retailItems = useSelector(selectAllRetailItems);
  const retailItemsStatus = useSelector(getRetailItemsStatus);
  const dispatchRetailItems: ThunkDispatch<RetailItem[], void, AnyAction> =
    useDispatch();

  useEffect(() => {
    if (retailItemsStatus === 'idle') {
      dispatchRetailItems(fetchRetailItemsThunk());
    }
  }, [dispatchRetailItems, retailItemsStatus]);

  const { currentUser } = useUsers();

  const retailItemsOfCurrentUser = useCallback(
    () =>
      retailItems.filter(
        (retailItem) => retailItem.createdBy === currentUser?.id,
      ),
    [currentUser?.id, retailItems],
  );

  /**
   * Select a retailItem with Id
   * @param retailItemId id of the retailItem you would like to select
   * @returns RetailItem if exists else undefined
   */
  const selectRetailItemById = useCallback(
    (retailItemId: number) =>
      retailItems.find((retailItem) => retailItem.id === retailItemId) ?? null,
    [retailItems],
  );

  /**
   * Select retailItems with RetailerId
   * @param  retailerId the id of the retailStore user you would like to select
   * @returns RetailItem array
   */
  const selectRetailItemsByRetailerId = useCallback(
    (retailerId: number) =>
      retailItems.filter((retailItem) => retailItem.createdBy === retailerId),
    [retailItems],
  );

  /**
   * Select retailItems with category
   * @param category the category of the retailItems you would like to select
   * @returns RetailItem array
   */
  const selectRetailItemByCategory = useCallback(
    (category: RetailItemType) =>
      retailItems.filter(
        (retailItem) => retailItem.retailItemType === category,
      ),
    [retailItems],
  );

  /**
   * ***CREATE***
   * Await this with the add request
   * ```ts
   * addRetailItem(values).then((added)=>{
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
  const addRetailItem = useCallback(
    async (addRetailItemRequest: RetailItemAddOrUpdateRequest) => {
      const result: { errors?: Record<string, string>; id: number } = {
        id: -1,
      };
      try {
        const value = await dispatchRetailItems(
          addRetailItemThunk(addRetailItemRequest),
        );
        if (addRetailItemThunk.fulfilled.match(value)) {
          console.log('Added RetailItem');
          result.id = value.payload.id;
        } else if (addRetailItemThunk.rejected.match(value)) {
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
        console.log('Error while adding retailItem', error);
      }
      return result;
    },
    [dispatchRetailItems],
  );

  /**
   * ***UPDATE***
   * Await this with the edit request
   * ```ts
   * editRetailItemById(id,values).then((edited)=>{
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
  const editRetailItemById = useCallback(
    async (
      retailItemId: number,
      editedRetailItemRequest: RetailItemAddOrUpdateRequest,
    ) => {
      const result: { errors?: Record<string, string>; success: boolean } = {
        success: false,
      };
      try {
        const value = await dispatchRetailItems(
          editRetailItemThunk({
            retailItemId: retailItemId,
            updatedRetailItem: editedRetailItemRequest,
          }),
        );
        if (editRetailItemThunk.fulfilled.match(value)) {
          console.log('Edited RetailItem!');
          result.success = true;
        } else if (editRetailItemThunk.rejected.match(value)) {
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
        console.log('Error while editing retailItem', error);
      }
      return result;
    },
    [dispatchRetailItems],
  );

  /**
   * ***DELETE***
   * Specify an Id to delete a retailItem
   * ```ts
   * deleteRetailItemById(id).then((deleted)=>{
   *   if (deleted) {
   *     ...
   *   } else {
   *     ...
   *   }
   * })
   * ```
   * @param id: Id of the retailItem you want to delete
   * @returns boolean
   */
  const deleteRetailItemById = useCallback(
    async (id: number) => {
      try {
        const value = await dispatchRetailItems(deleteRetailItemThunk(id));
        if (deleteRetailItemThunk.fulfilled.match(value)) {
          console.log('Deleted retailItem');
          return true;
        } else {
          console.log('Failed to delete retailItem');
        }
      } catch (error) {
        console.log('Error while deleting retailItem', error);
      }
      return false;
    },
    [dispatchRetailItems],
  );

  return {
    addRetailItem,
    deleteRetailItemById,
    editRetailItemById,
    retailItems,
    retailItemsOfCurrentUser,
    retailItemsStatus,
    selectRetailItemByCategory,
    selectRetailItemById,
    selectRetailItemsByRetailerId,
  };
};
