import type { FunctionComponent } from 'react';

import RetailItemForm from '../../../components/ServiceProviderProf/RetailItemForm';
import TopAppBar from '../../../components/TopAppBar';
import useCurrentUser from '../../../hooks/users/useCurrentUser';
import UnauthorizedAccess from '../../unauthorized_access';

const AddRetailItem: FunctionComponent = () => {
  const currentUser = useCurrentUser();

  return (
    <>
      <TopAppBar />
      {currentUser &&
      currentUser.id &&
      currentUser.serviceProviderType === ('RETAILER' as ServiceProviders) ? (
        <RetailItemForm userId={currentUser.id} />
      ) : (
        <UnauthorizedAccess />
      )}
    </>
  );
};

export default AddRetailItem;
