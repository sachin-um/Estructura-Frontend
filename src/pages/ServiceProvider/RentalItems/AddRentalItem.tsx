import type { FunctionComponent } from 'react';

import { useSelector } from 'react-redux';

import RentalItemForm from '../../../components/ServiceProviderProf/RentalItemForm';
import TopAppBar from '../../../components/TopAppBar';
import { selectUser } from '../../../redux/UserAuthenticationReducer';
import UnauthorizedAccess from '../../unauthorized_access';

const AddRentalItem: FunctionComponent = () => {
  const userInfo = useSelector(selectUser);

  return (
    <>
      <TopAppBar />
      {userInfo &&
      userInfo.id &&
      userInfo.serviceProviderType ===
        ('RENTINGCOMPANY' as ServiceProviders) ? (
        <RentalItemForm userId={userInfo.id} />
      ) : (
        <UnauthorizedAccess />
      )}
    </>
  );
};

export default AddRentalItem;
