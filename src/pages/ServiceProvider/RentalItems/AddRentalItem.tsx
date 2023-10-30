import type { FunctionComponent } from 'react';

import RentalItemForm from '../../../components/ServiceProviderProf/RentalItemForm';
import TopAppBar from '../../../components/TopAppBar';
import useCurrentUser from '../../../hooks/users/useCurrentUser';
import UnauthorizedAccess from '../../unauthorized_access';

const AddRentalItem: FunctionComponent = () => {
  const currentUser = useCurrentUser();

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
