import type { FunctionComponent } from 'react';

import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import RetailItemForm from '../../../components/ServiceProviderProf/RetailItemForm';
import TopAppBar from '../../../components/TopAppBar';
import { useRetailItem } from '../../../hooks/retailItem/useRetailItem';
import useCurrentUser from '../../../hooks/users/useCurrentUser';
import UnauthorizedAccess from '../../unauthorized_access';

const EditRetailItem: FunctionComponent = () => {
  const currentUser = useCurrentUser();

  const retailItemId = parseInt(useParams<{ id: string }>().id ?? '0');

  const {
    getRetailItem: { fetchRetailItem, retailItem },
  } = useRetailItem();

  useEffect(() => {
    fetchRetailItem(retailItemId);
  }, [fetchRetailItem, retailItemId]);

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
