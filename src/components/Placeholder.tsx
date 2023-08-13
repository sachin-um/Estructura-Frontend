import type { FunctionComponent } from 'react';

const PlaceHolder: FunctionComponent = () => {
  return (
    <>
      <h1>This page hasn&apos;t been implemented yet.</h1>
      <p>
        route: <b>{window.location.pathname}</b>
      </p>
    </>
  );
};

export default PlaceHolder;
