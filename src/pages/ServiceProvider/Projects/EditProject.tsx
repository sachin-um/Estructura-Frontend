import type { FunctionComponent } from 'react';

import { useParams } from 'react-router-dom';

import ProjectForm from '../../../components/ServiceProviderProf/ProjectForm';
import TopAppBar from '../../../components/TopAppBar';
import { useProjects } from '../../../redux/Projects/useProjects';
import { useUsers } from '../../../redux/UserInfo/useUsers';
import UnauthorizedAccess from '../../unauthorized_access';

const EditProject: FunctionComponent = () => {
  const projectId = parseInt(useParams<{ id: string }>().id ?? '0');

  const { selectProjectById } = useProjects();

  const project = selectProjectById(projectId);

  const { currentUser } = useUsers();

  return (
    <>
      <TopAppBar />
      {currentUser &&
      currentUser.id &&
      currentUser.serviceProviderType === 'PROFESSIONAL' ? (
        <ProjectForm
          {...(project && project.createdBy === currentUser.id
            ? { OriginalProject: project, userId: currentUser.id }
            : { userId: currentUser.id })}
        />
      ) : (
        <UnauthorizedAccess />
      )}
    </>
  );
};

export default EditProject;
