import type { FunctionComponent } from 'react';

import ProjectForm from '../../../components/ServiceProviderProf/ProjectForm';
import TopAppBar from '../../../components/TopAppBar';
import { useUsers } from '../../../redux/UserInfo/useUsers';
import UnauthorizedAccess from '../../unauthorized_access';

const AddProject: FunctionComponent = () => {
  const { currentUser } = useUsers();

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
