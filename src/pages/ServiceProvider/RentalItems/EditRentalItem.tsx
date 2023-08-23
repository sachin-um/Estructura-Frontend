import type { FunctionComponent } from 'react';

import { useParams } from 'react-router-dom';

import RentalItemForm from '../../../components/ServiceProviderProf/RentalItemForm';
import TopAppBar from '../../../components/TopAppBar';
import { useRentingItems } from '../../../redux/Renting/useRentingItems';
import { useUsers } from '../../../redux/UserInfo/useUsers';
import UnauthorizedAccess from '../../unauthorized_access';

const EditRentalItem: FunctionComponent = () => {
  const { currentUser } = useUsers();

  const rentalItemId = parseInt(useParams<{ id: string }>().id ?? '0');

  const { selectRentingItemById } = useRentingItems();

  const rentalItem = selectRentingItemById(rentalItemId);

  return (
    <>
      <TopAppBar />
      {currentUser &&
      currentUser.id &&
      currentUser.serviceProviderType ===
        ('RENTINGCOMPANY' as ServiceProviders) ? (
        <RentalItemForm
          {...(rentalItem && rentalItem.createdBy === currentUser.id
            ? { OriginalRentingItem: rentalItem, userId: currentUser.id }
            : { userId: currentUser.id })}
        />
      ) : (
        <UnauthorizedAccess />
      )}
    </>
  );
};

export default EditRentalItem;
