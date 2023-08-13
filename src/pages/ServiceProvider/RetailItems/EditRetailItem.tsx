import type { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import type { FunctionComponent } from 'react';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import RetailItemForm from '../../../components/ServiceProviderProf/RetailItemForm';
import TopAppBar from '../../../components/TopAppBar';
import {
  fetchRetailItemById,
  selectRetailItem,
} from '../../../redux/RetailItems/SingleRetailItemReducer';
import { selectUser } from '../../../redux/UserAuthenticationReducer';

const EditRetailItem: FunctionComponent = () => {
  const userInfo = useSelector(selectUser);

  const retailItemId = parseInt(useParams<{ id: string }>().id ?? '0');

  const dispatch: ThunkDispatch<RetailItem, void, AnyAction> = useDispatch();

  const retailItem = useSelector(selectRetailItem);

  useEffect(() => {
    dispatch(fetchRetailItemById(retailItemId));
  }, [dispatch, retailItemId]);

  return (
    <>
      <TopAppBar />
      {userInfo &&
      userInfo.id &&
      userInfo.serviceProviderType === 'RETAILER' ? (
        <RetailItemForm
          {...(retailItem && retailItem.createdBy === userInfo.id
            ? { OriginalRetailItem: retailItem, userId: userInfo.id }
            : { userId: userInfo.id })}
        />
      ) : (
        <h1>Please Login as The Retail Store to Edit a RetailItem</h1>
      )}
    </>
  );
};

export default EditRetailItem;
