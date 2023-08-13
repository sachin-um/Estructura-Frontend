import type { FunctionComponent } from 'react';

import { useSelector } from 'react-redux';

import ProjectForm from '../../../components/ServiceProviderProf/ProjectForm';
import TopAppBar from '../../../components/TopAppBar';
import { selectUser } from '../../../redux/UserAuthenticationReducer';

const AddProject: FunctionComponent = () => {
  const userInfo = useSelector(selectUser);

  return (
    <>
      <TopAppBar />
      {userInfo &&
      userInfo.id &&
      userInfo.serviceProviderType === ('PROFESSIONAL' as ServiceProviders) ? (
        <ProjectForm userId={userInfo.id} />
      ) : (
        <h1>Please Login as a Professional to Add a Project</h1>
      )}
    </>
  );
};

export default AddProject;
