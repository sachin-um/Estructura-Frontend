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
          padding: '50px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
          gap: '20px',
        }}
      >
        <CreateCard />
      </div>
    </>
  );

}