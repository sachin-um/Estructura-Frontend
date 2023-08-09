import { type AnyAction, type ThunkDispatch } from '@reduxjs/toolkit';
import { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  fetchUsers,
  getAllUsers,
  getUsersError,
  getUsersStatus,
} from '../redux/UserInfo/UserInfoReducer';

interface TestProps {
  name?: string;
}

const Test: FunctionComponent<TestProps> = () => {
  const usersStatus = useSelector(getUsersStatus);
  const usersError = useSelector(getUsersError);
  const usersInfo = useSelector(getAllUsers);

  const dispatch: ThunkDispatch<baseUser[], void, AnyAction> = useDispatch();

  useEffect(() => {
    if (usersStatus === 'idle') {
      dispatch(fetchUsers());
    }
  }, [dispatch, usersStatus]);

  return (
    <>
      <pre>{JSON.stringify(usersStatus, null, 2)}</pre>
      <pre>{JSON.stringify(usersError, null, 2)}</pre>
      <pre>{JSON.stringify(usersInfo, null, 2)}</pre>
    </>
  );
};

export default Test;
