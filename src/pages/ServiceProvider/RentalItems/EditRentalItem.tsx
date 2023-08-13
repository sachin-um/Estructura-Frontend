import type { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import type { FunctionComponent } from 'react';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import RentalItemForm from '../../../components/ServiceProviderProf/RentalItemForm';
import TopAppBar from '../../../components/TopAppBar';
import {
  fetchRentingItemById,
  selectRentingItem,
} from '../../../redux/Renting/SingleRentingItemReducer';
import { selectUser } from '../../../redux/UserAuthenticationReducer';

const EditRentalItem: FunctionComponent = () => {
  const userInfo = useSelector(selectUser);

  const rentalItemId = parseInt(useParams<{ id: string }>().id ?? '0');

  const dispatch: ThunkDispatch<RentingItem, void, AnyAction> = useDispatch();

  const rentalItem = useSelector(selectRentingItem);

  useEffect(() => {
    dispatch(fetchRentingItemById(rentalItemId));
  }, [dispatch, rentalItemId]);

  return (
    <>
      <TopAppBar />
      {userInfo &&
      userInfo.id &&
      userInfo.serviceProviderType === 'RENTINGCOMPANY' ? (
        <RentalItemForm
          {...(rentalItem && rentalItem.createdBy === userInfo.id
            ? { OriginalRentalItem: rentalItem, userId: userInfo.id }
            : { userId: userInfo.id })}
        />
      ) : (
        <h1>Please Login as The Renting Company to edit a RentalItem</h1>
      )}
    </>
  );
};

export default EditRentalItem;