import React from 'react';

import CusBar from '../../components/CusTopBar';
import CreateCard from '../../components/blog/createcard';

export default function Create() {
  return (
    <>
      <CusBar />
      <div
        style={{
          backgroundColor: '#f9f9f9',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          justifyContent: 'flex-start',
          padding: '50px',
        }}
      >
        <CreateCard />
      </div>
    </>
  );
}
