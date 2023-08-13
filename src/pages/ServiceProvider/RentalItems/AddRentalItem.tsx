import type { FunctionComponent } from 'react';

import { useSelector } from 'react-redux';

import RentalItemForm from '../../../components/ServiceProviderProf/RentalItemForm';
import TopAppBar from '../../../components/TopAppBar';
import { selectUser } from '../../../redux/UserAuthenticationReducer';

const AddRentalItem: FunctionComponent = () => {
  const userInfo = useSelector(selectUser);

  return (
    <>
      <TopAppBar />
      {userInfo &&
      userInfo.id &&
      userInfo.serviceProviderType === 'RENTINGCOMPANY' ? (
        <RentalItemForm userId={userInfo.id} />
      ) : (
        <h1>Please Login as a Renting Company to Add a RentalItem</h1>
      )}
    </>
  );
};

export default AddRentalItem;
