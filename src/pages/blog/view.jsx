import React, { useEffect, useState } from 'react';

import CusBar from '../../components/CusTopBar';
import BlogDetailsCard from '../../components/blog/blogdetailscard';
import ProfileCard from '../../components/blog/profilecard';

export default function View() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
          padding: '10px',
        }}
      >
        <br />
        <BlogDetailsCard />
        {!isMobile && <ProfileCard />}
      </div>
    </>
  );
}
