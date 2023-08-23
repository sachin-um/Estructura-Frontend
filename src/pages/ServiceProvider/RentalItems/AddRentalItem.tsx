import type { FunctionComponent } from 'react';

import RentalItemForm from '../../../components/ServiceProviderProf/RentalItemForm';
import TopAppBar from '../../../components/TopAppBar';
import { useUsers } from '../../../redux/UserInfo/useUsers';
import UnauthorizedAccess from '../../unauthorized_access';

const AddRentalItem: FunctionComponent = () => {
  const { currentUser } = useUsers();

  return (
    <>
      <TopAppBar />
      {currentUser &&
      currentUser.id &&
      currentUser.serviceProviderType ===
        ('RENTINGCOMPANY' as ServiceProviders) ? (
        <RentalItemForm userId={currentUser.id} />
      ) : (
        <UnauthorizedAccess />
      )}
    </>
  );
};

export default AddRentalItem;
