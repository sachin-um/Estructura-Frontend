/**
 * A custom React hook for managing project data.
 *
 * @returns An object containing functions for adding, editing, and deleting projects, as well as fetching project data.
 */
import { useCallback, useState } from 'react';

import API from '../../lib/API';
import { violationsToErrorsTS } from '../../utils/ViolationsTS';

export const useProject = () => {
  const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Fetches a project by its ID and sets the state accordingly.
   * @param projectId - The ID of the project to fetch.
   */
  const fetchProject = useCallback(async (projectId: number) => {
    setIsLoading(true);
    const response = await API.get<Project>(`/projects/project/${projectId}`);
    if (response.status === 200) {
      setProject(response.data);
    } else {
      setProject(null);
    }
    setIsLoading(false);
  }, []);

  /**
   * Adds a new project to the database.
   * @param projectAddRequest - The request object containing the project data to be added.
   * @returns An object containing the result of the add operation.
   */
  const addProject = useCallback(
    async (projectAddRequest: ProjectAddOrUpdateRequest) => {
      const result: AddMethodResult<Project> = {
        errors: {},
        item: null,
        success: false,
      };
      const response = await API.post<GenericAddOrUpdateResponse>(
        '/projects/add',
        projectAddRequest,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      if (response.status !== 200 || response.data.success === false) {
        if (response.status !== 200) {
          console.error('AddProjectResponse.status !== 200');
        }
        if (response.data.validation_violations) {
          result.errors = violationsToErrorsTS(
            response.data.validation_violations,
          );
        }
      } else {
        const id: number = response.data.id;
        result.item = (await API.get<Project>(`/projects/project/${id}`)).data;
      }
      return result;
    },
    [],
  );

  /**
   * Edit a project by ID.
   * @param projectId - The ID of the project to edit.
   * @param updatedProject - The updated project data.
   * @returns An object containing information about the update operation.
   */
  const editProjectById = useCallback(
    async (projectId: number, updatedProject: ProjectAddOrUpdateRequest) => {
      const result: UpdateMethodResult = {
        errors: {},
        success: false,
      };
      const response = await API.post<GenericAddOrUpdateResponse>(
        `/projects/update/${projectId}`,
        updatedProject,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      if (response.status !== 200 || response.data.success === false) {
        if (response.status !== 200) {
          console.error('EditProjectResponse.status !== 200');
        }
        if (response.data.validation_violations) {
          result.errors = violationsToErrorsTS(
            response.data.validation_violations,
          );
        }
      } else {
        result.success = true;
        setProject(
          (await API.get<Project>(`/projects/project/${response.data.id}`))
            .data,
        );
      }
      return result;
    },
    [],
  );

  /**
   * Deletes a project by its ID.
   * @param id - The ID of the project to delete.
   * @returns A boolean indicating whether the deletion was successful or not.
   */
  const deleteProjectById = useCallback(async (id: number) => {
    const response = await API.delete<GenericDeleteResponse>(
      `/projects/delete/${id}`,
    );
    if (response.status !== 200 || response.data.success === false) {
      if (response.status !== 200) {
        console.error('DeleteProjectResponse.status !== 200');
      }
      alert('Error Deleting project');
    } else {
      setProject(null);
      return true;
    }
    return false;
  }, []);

  return {
    addProject,
    deleteProjectById,
    editProjectById,
    getProject: { fetchProject, isLoading, project },
  };
};
