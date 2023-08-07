import React, { useState, useEffect } from 'react';
import CusBar from '../../components/CusTopBar';
import ProfileCard from '../../components/blog/profilecard';
import BlogDetailsCard from '../../components/blog/blogdetailscard';

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
          padding: '10px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
          gap: '20px',
        }}
      >
        <br />
        <BlogDetailsCard />
        {!isMobile && <ProfileCard />}
      </div>
    </>
  );
}
