import type { FunctionComponent } from 'react';

import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import RentalItemForm from '../../../components/ServiceProviderProf/RentalItemForm';
import TopAppBar from '../../../components/TopAppBar';
import { useRentingItem } from '../../../hooks/rentingItem/useRentingItem';
import { useUsers } from '../../../redux/UserInfo/useUsers';
import UnauthorizedAccess from '../../unauthorized_access';

const EditRentalItem: FunctionComponent = () => {
  const { currentUser } = useUsers();

  const rentalItemId = parseInt(useParams<{ id: string }>().id ?? '0');

  const {
    getRentingItem: { fetchRentingItem, isLoading, rentingItem },
  } = useRentingItem();

  useEffect(() => {
    fetchRentingItem(rentalItemId);
  }, [fetchRentingItem, rentalItemId]);

  return (
    <>
      <TopAppBar />
      {currentUser &&
      currentUser.id &&
      currentUser.serviceProviderType ===
        ('RENTINGCOMPANY' as ServiceProviders) ? (
        <RentalItemForm
          {...(rentingItem && rentingItem.createdBy === currentUser.id
            ? { OriginalRentingItem: rentingItem, userId: currentUser.id }
            : { userId: currentUser.id })}
        />
      ) : (
        <UnauthorizedAccess />
      )}
    </>
  );
};

export default EditRentalItem;
