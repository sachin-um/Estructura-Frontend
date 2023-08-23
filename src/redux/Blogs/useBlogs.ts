import type { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';

import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { violationsToErrorsTS } from '../../utils/ViolationsTS';
import {
  addBlogThunk,
  deleteBlogThunk,
  editBlogThunk,
  fetchBlogsThunk,
  getBlogsError,
  getBlogsStatus,
  selectAllBlogs,
} from './BlogsReducer';

export const useBlogs = () => {
  const dispatchBlogs: ThunkDispatch<Blog[], void, AnyAction> = useDispatch();

  const blogs = useSelector(selectAllBlogs);
  const blogsStatus = useSelector(getBlogsStatus);
  const blogsError = useSelector(getBlogsError);

  useEffect(() => {
    if (blogsStatus === 'idle') {
      dispatchBlogs(fetchBlogsThunk());
    }
  }, [blogsStatus, dispatchBlogs]);

  useEffect(() => {
    if (blogsError !== null && blogsError) {
      console.log('Error fetching blogs!');
    }
  }, [blogsError]);

  /**
   * ***CREATE***
   * Await this with the add request
   * ```ts
   * addBlog(values).then((added)=>{
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
  const addBlog = useCallback(
    async (addBlogRequest: BlogAddOrUpdateRequest) => {
      const result: { errors?: Record<string, string>; id: number } = {
        id: -1,
      };
      try {
        const value = await dispatchBlogs(addBlogThunk(addBlogRequest));
        if (addBlogThunk.fulfilled.match(value)) {
          console.log('Added Blog');
          result.id = value.payload.id;
        } else if (addBlogThunk.rejected.match(value)) {
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
        console.log('Error while adding blog', error);
      }
      return result;
    },
    [dispatchBlogs],
  );

  /**
   * ***UPDATE***
   * Await this with the edit request
   * ```ts
   * editBlogById(id,values).then((edited)=>{
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
  const editBlogById = useCallback(
    async (blogId: number, editedBlogRequest: BlogAddOrUpdateRequest) => {
      const result: { errors?: Record<string, string>; success: boolean } = {
        success: false,
      };
      try {
        const value = await dispatchBlogs(
          editBlogThunk({
            blogId: blogId,
            updatedBlog: editedBlogRequest,
          }),
        );
        if (editBlogThunk.fulfilled.match(value)) {
          console.log('Edited Blog!');
          result.success = true;
        } else if (editBlogThunk.rejected.match(value)) {
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
        console.log('Error while editing blog', error);
      }
      return result;
    },
    [dispatchBlogs],
  );

  /**
   * ***DELETE***
   * Specify an Id to delete a blog
   * ```ts
   * deleteBlogById(id).then((deleted)=>{
   *   if (deleted) {
   *     ...
   *   } else {
   *     ...
   *   }
   * })
   * ```
   * @param id: Id of the blog you want to delete
   * @returns boolean
   */
  const deleteBlogById = useCallback(
    async (id: number) => {
      try {
        const value = await dispatchBlogs(deleteBlogThunk(id));
        if (deleteBlogThunk.fulfilled.match(value)) {
          console.log('Deleted blog');
          return true;
        } else {
          console.log('Failed to delete blog');
        }
      } catch (error) {
        console.log('Error while deleting blog', error);
      }
      return false;
    },
    [dispatchBlogs],
  );

  /**
   * Select a blog with Id
   * @param id Id of the blog you would like to select
   * @returns Blog if exists else undefined
   */
  const selectBlogById = (id: number) => blogs.find((blog) => blog.id === id);

  return {
    addBlog,
    blogs,
    blogsStatus,
    deleteBlogById,
    editBlogById,
    selectBlogById,
  } as const;
};
