import type { FunctionComponent } from 'react';

import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ProjectForm from '../../../components/ServiceProviderProf/ProjectForm';
import TopAppBar from '../../../components/TopAppBar';
import { useProject } from '../../../hooks/project/useProject';
import { useUsers } from '../../../redux/UserInfo/useUsers';
import Loading from '../../loading';
import UnauthorizedAccess from '../../unauthorized_access';

const EditProject: FunctionComponent = () => {
  const projectId = parseInt(useParams<{ id: string }>().id ?? '0');

  const {
    getProject: { fetchProject, isLoading, project },
  } = useProject();

  useEffect(() => {
    fetchProject(projectId);
  }, [fetchProject, projectId]);

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
      ) : isLoading ? (
        <Loading />
      ) : (
        <UnauthorizedAccess />
      )}
    </>
  );
};

export default EditProject;
