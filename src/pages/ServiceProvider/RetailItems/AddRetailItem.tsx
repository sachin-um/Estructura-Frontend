import type { FunctionComponent } from 'react';

import { useSelector } from 'react-redux';

import RetailItemForm from '../../../components/ServiceProviderProf/RetailItemForm';
import TopAppBar from '../../../components/TopAppBar';
import { selectUser } from '../../../redux/UserAuthenticationReducer';
import UnauthorizedAccess from '../../unauthorized_access';

const AddRetailItem: FunctionComponent = () => {
  const userInfo = useSelector(selectUser);

  return (
    <>
      <TopAppBar />
      {userInfo &&
      userInfo.id &&
      userInfo.serviceProviderType === ('RETAILER' as ServiceProviders) ? (
        <RetailItemForm userId={userInfo.id} />
      ) : (
        <UnauthorizedAccess />
      )}
    </>
  );
};

export default AddRetailItem;
