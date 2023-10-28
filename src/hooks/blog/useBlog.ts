/**
 * A custom React hook for managing blog data.
 *
 * @returns An object containing functions for adding, editing, and deleting blogs, as well as fetching blog data.
 */
import { useCallback, useState } from 'react';

import API from '../../lib/API';
import { violationsToErrorsTS } from '../../utils/ViolationsTS';

export const useBlog = () => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Fetches a blog by its ID and sets the state accordingly.
   * @param blogId - The ID of the blog to fetch.
   */
  const fetchBlog = useCallback(async (blogId: number) => {
    setIsLoading(true);
    const response = await API.get<Blog>(`/blogs/blog/${blogId}`);
    if (response.status === 200) {
      setBlog(response.data);
    } else {
      setBlog(null);
    }
    setIsLoading(false);
  }, []);

  /**
   * Adds a new blog to the database.
   * @param blogAddRequest - The request object containing the blog data to be added.
   * @returns An object containing the result of the add operation.
   */
  const addBlog = useCallback(
    async (blogAddRequest: BlogAddOrUpdateRequest) => {
      const result: AddMethodResult<Blog> = {
        errors: {},
        item: null,
        success: false,
      };
      const response = await API.post<GenericAddOrUpdateResponse>(
        '/blogs/add',
        blogAddRequest,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      if (response.status !== 200 || response.data.success === false) {
        if (response.status !== 200) {
          console.error('AddBlogResponse.status !== 200');
        }
        if (response.data.validation_violations) {
          result.errors = violationsToErrorsTS(
            response.data.validation_violations,
          );
        }
      } else {
        const id: number = response.data.id;
        result.item = (await API.get<Blog>(`/blogs/blog/${id}`)).data;
        result.success = true;
      }
      return result;
    },
    [],
  );

  /**
   * Edit a blog by ID.
   * @param blogId - The ID of the blog to edit.
   * @param updatedBlog - The updated blog data.
   * @returns An object containing information about the update operation.
   */
  const editBlogById = useCallback(
    async (blogId: number, updatedBlog: BlogAddOrUpdateRequest) => {
      const result: UpdateMethodResult = {
        errors: {},
        success: false,
      };
      const response = await API.post<GenericAddOrUpdateResponse>(
        `/blogs/update/${blogId}`,
        updatedBlog,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      if (response.status !== 200 || response.data.success === false) {
        if (response.status !== 200) {
          console.error('EditBlogResponse.status !== 200');
        }
        if (response.data.validation_violations) {
          result.errors = violationsToErrorsTS(
            response.data.validation_violations,
          );
        }
      } else {
        result.success = true;
        setBlog((await API.get<Blog>(`/blogs/blog/${response.data.id}`)).data);
      }
      return result;
    },
    [],
  );

  /**
   * Deletes a blog by its ID.
   * @param id - The ID of the blog to delete.
   * @returns A boolean indicating whether the deletion was successful or not.
   */
  const deleteBlogById = useCallback(async (id: number) => {
    const response = await API.delete<GenericDeleteResponse>(
      `/blogs/delete/${id}`,
    );
    if (response.status !== 200 || response.data.success === false) {
      if (response.status !== 200) {
        console.error('DeleteBlogResponse.status !== 200');
      }
      alert('Error Deleting blog');
    } else {
      setBlog(null);
      return true;
    }
    return false;
  }, []);

  return {
    addBlog,
    deleteBlogById,
    editBlogById,
    getBlog: { blog, fetchBlog, isLoading },
  };
};
