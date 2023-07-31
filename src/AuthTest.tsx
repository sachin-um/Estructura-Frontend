import { Button } from '@mui/material';
import { Stack } from '@mui/system';
import { type AnyAction, type ThunkDispatch } from '@reduxjs/toolkit';
// import { type FormikProps } from 'formik';
// import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import TopAppBar from './components/TopAppBar';
import API from './lib/API';
import {
  SignInRequest,
  UserState,
  clean,
  selectIsAuthenticated,
  selectUser,
  signIn,
} from './redux/UserAuthenticationReducer';

const initialValues: SignInRequest = {
  email: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().required('Required'),
});

export default function AuthTest() {
  //   const FormRef = useRef<FormikProps<SignInRequest>>(null);
  const dispatch: ThunkDispatch<UserState, void, AnyAction> = useDispatch();

  const currentUserState = useSelector(selectUser);
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return (
    <div>
      <TopAppBar />
      <h1>AuthTest</h1>
      {isAuthenticated ? (
        <div>
          <h2>Authenticated</h2>
          <p>{JSON.stringify(currentUserState, null, '  ')}</p>
        </div>
      ) : (
        <div>
          <h2>Not Authenticated</h2>
          <p>{JSON.stringify(currentUserState, null, '  ')}</p>
        </div>
      )}
      <Stack maxWidth={'20rem'} spacing={3}>
        <Button
          onClick={() => {
            dispatch(
              signIn({
                email: 'admin@gmail.com',
                password: 'password',
              }),
            )
              .then((resultAction) => {
                console.log(resultAction);
              })
              .catch((error) => {
                console.log(error);
              });
          }}
          variant="contained"
        >
          Sign In
        </Button>

        <Button
          onClick={async () => {
            const res = await API.get('http://localhost:8080/api/v1/admin');
            console.log(res);
          }}
        >
          Try Access
        </Button>

        <Button
          onClick={async () => {
            const logout = await API.get('/auth/logout');
            const res = dispatch(clean());
            console.table({
              logout,
              res,
            });
          }}
        >
          Sign Out
        </Button>
      </Stack>
    </div>
  );
}
