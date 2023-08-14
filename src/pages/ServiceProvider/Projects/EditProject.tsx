import type { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import type { FunctionComponent } from 'react';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ProjectForm from '../../../components/ServiceProviderProf/ProjectForm';
import TopAppBar from '../../../components/TopAppBar';
import {
  fetchProjectByById,
  selectProject,
} from '../../../redux/Projects/SingleProjectReducer';
import { selectUser } from '../../../redux/UserAuthenticationReducer';
import UnauthorizedAccess from '../../unauthorized_access';

const EditProject: FunctionComponent = () => {
  const userInfo = useSelector(selectUser);

  const projectId = parseInt(useParams<{ id: string }>().id ?? '0');

  const dispatch: ThunkDispatch<Project, void, AnyAction> = useDispatch();

  const project = useSelector(selectProject);

  useEffect(() => {
    dispatch(fetchProjectByById(projectId));
  }, [dispatch, projectId]);

  return (
    <>
      <TopAppBar />
      {userInfo &&
      userInfo.id &&
      userInfo.serviceProviderType === 'PROFESSIONAL' ? (
        <ProjectForm
          {...(project && project.createdBy === userInfo.id
            ? { OriginalProject: project, userId: userInfo.id }
            : { userId: userInfo.id })}
        />
      ) : (
        <UnauthorizedAccess />
      )}
    </>
  );
};

export default EditProject;
