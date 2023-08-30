import type { FunctionComponent } from 'react';

import ProjectForm from '../../../components/ServiceProviderProf/ProjectForm';
import TopAppBar from '../../../components/TopAppBar';
import useCurrentUser from '../../../hooks/users/useCurrentUser';
import UnauthorizedAccess from '../../unauthorized_access';

const AddProject: FunctionComponent = () => {
  const currentUser = useCurrentUser();

  return (
    <>
      <TopAppBar />
      {currentUser &&
      currentUser.id &&
      currentUser.serviceProviderType ===
        ('PROFESSIONAL' as ServiceProviders) ? (
        <ProjectForm userId={currentUser.id} />
      ) : (
        <UnauthorizedAccess />
      )}
    </>
  );
};

export default AddProject;
