import type { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';

import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { violationsToErrorsTS } from '../../utils/ViolationsTS';
import {
  addProjectThunk,
  deleteProjectThunk,
  editProjectThunk,
  fetchProjects,
  getProjectsStatus,
  selectAllProjects,
} from './ProjectsReducer';

export const useProjects = () => {
  const projects = useSelector(selectAllProjects);
  const projectsStatus = useSelector(getProjectsStatus);

  const dispatchProjects: ThunkDispatch<Project[], void, AnyAction> =
    useDispatch();

  useEffect(() => {
    if (projectsStatus === 'idle') {
      dispatchProjects(fetchProjects());
    }
  }, [dispatchProjects, projectsStatus]);

  /**
   * ***CREATE***
   * Await this with the add request
   * ```ts
   * addProject(values).then((added)=>{
   *   if (added.id !== -1) {
   *     ...
   *   } else if (added.errors) {
   *     setErrors(added.errors)
   *   }
   * })
   * ```
   * @returns errors?: Record for formikErrors
   * @returns id: -1 if failed, inserted Id if succeeded
   */
  const addProject = useCallback(
    async (addProjectRequest: ProjectAddOrUpdateRequest) => {
      const result: { errors?: Record<string, string>; id: number } = {
        id: -1,
      };
      try {
        const value = await dispatchProjects(
          addProjectThunk(addProjectRequest),
        );
        if (addProjectThunk.fulfilled.match(value)) {
          console.log('Added Project');
          // Set projects state as mutated
          result.id = value.payload.id;
        } else if (addProjectThunk.rejected.match(value)) {
          const response = value.payload as GenericAddOrUpdateResponse;
          if (response.validation_violations) {
            result.errors = violationsToErrorsTS(
              response.validation_violations,
            );
          } else {
            console.log('Adding rejected for unspecified reason');
          }
        }
      } catch (error) {
        console.log('Error while adding project', error);
      }
      return result;
    },
    [dispatchProjects],
  );

  /**
   * ***UPDATE***
   * Await this with the edit request
   * ```ts
   * editProjectById(id,values).then((edited)=>{
   *   if (edited.success) {
   *     ...
   *   } else if (edited.errors) {
   *     setErrors(edited.errors)
   *   }
   * })
   * ```
   * @returns errors?: Record for formikErrors
   * @returns success: boolean indicating success or failure
   */
  const editProjectById = useCallback(
    async (
      projectId: number,
      editedProjectRequest: ProjectAddOrUpdateRequest,
    ) => {
      const result: { errors?: Record<string, string>; success: boolean } = {
        success: false,
      };
      try {
        const value = await dispatchProjects(
          editProjectThunk({
            projectId: projectId,
            updatedProject: editedProjectRequest,
          }),
        );
        if (editProjectThunk.fulfilled.match(value)) {
          console.log('Edited Project!');
          result.success = true;
        } else if (editProjectThunk.rejected.match(value)) {
          const response = value.payload as GenericAddOrUpdateResponse;
          if (response.validation_violations) {
            console.log('Validation Violations detected');
            result.errors = violationsToErrorsTS(
              response.validation_violations,
            );
          } else {
            console.log('Edit rejected for unspecified reason');
          }
        }
      } catch (error) {
        console.log('Error while editing project', error);
      }
      return result;
    },
    [dispatchProjects],
  );

  /**
   * ***DELETE***
   * Specify an Id to delete a project
   * ```ts
   * deleteProjectById(id).then((deleted)=>{
   *   if (deleted) {
   *     ...
   *   } else {
   *     ...
   *   }
   * })
   * ```
   * @param id: Id of the project you want to delete
   * @returns boolean
   */
  const deleteProjectById = useCallback(
    async (id: number) => {
      try {
        const value = await dispatchProjects(deleteProjectThunk(id));
        if (deleteProjectThunk.fulfilled.match(value)) {
          console.log('Deleted project');
          return true;
        } else {
          console.log('Failed to delete project');
        }
      } catch (error) {
        console.log('Error while deleting project', error);
      }
      return false;
    },
    [dispatchProjects],
  );

  /**
   * Select a project with Id
   * @param id Id of the project you would like to select
   * @returns Project if exists else undefined
   */
  const selectProjectById = (id: number) =>
    projects.find((project) => project.id === id);

  return {
    addProject,
    deleteProjectById,
    editProjectById,
    projects,
    projectsStatus,
    selectProjectById,
  } as const;
};
