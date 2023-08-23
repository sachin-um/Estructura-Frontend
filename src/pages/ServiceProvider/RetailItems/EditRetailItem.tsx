import type { FunctionComponent } from 'react';

import { useParams } from 'react-router-dom';

import RetailItemForm from '../../../components/ServiceProviderProf/RetailItemForm';
import TopAppBar from '../../../components/TopAppBar';
import { useRetailItems } from '../../../redux/RetailItems/useRetailItems';
import { useUsers } from '../../../redux/UserInfo/useUsers';
import UnauthorizedAccess from '../../unauthorized_access';

const EditRetailItem: FunctionComponent = () => {
  const { currentUser } = useUsers();

  const retailItemId = parseInt(useParams<{ id: string }>().id ?? '0');

  const { selectRetailItemById } = useRetailItems();

  const retailItem = selectRetailItemById(retailItemId);

  return (
    <>
      <TopAppBar />
      {currentUser &&
      currentUser.id &&
      currentUser.serviceProviderType === 'RETAILER' ? (
        <RetailItemForm
          {...(retailItem && retailItem.createdBy === currentUser.id
            ? { OriginalRetailItem: retailItem, userId: currentUser.id }
            : { userId: currentUser.id })}
        />
      ) : (
        <UnauthorizedAccess />
      )}
    </>
  );
};

export default EditRetailItem;
