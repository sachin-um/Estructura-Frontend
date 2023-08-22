import type { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';

import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectUser } from '../UserAuthenticationReducer';
import { fetchUsers, getUsersStatus, selectAllUsers } from './UsersInfoReducer';

export const useUsers = () => {
  const users = useSelector(selectAllUsers);
  const usersState = useSelector(getUsersStatus);

  const dispatch: ThunkDispatch<User[], void, AnyAction> = useDispatch();

  useEffect(() => {
    if (usersState === 'idle') {
      dispatch(fetchUsers());
    }
  }, [dispatch, usersState]);

  const selectUserById = useCallback(
    (userId: number) => users.find((user) => user.id === userId) ?? null,
    [users],
  );

  const loggedInUser = useSelector(selectUser);

  const currentUser = loggedInUser ? selectUserById(loggedInUser.id) : null;

  return { currentUser, selectUserById, users, usersState };
};
