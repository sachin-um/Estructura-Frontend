import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import { Box, Container, Typography } from '@mui/material';
import { type AnyAction, type ThunkDispatch } from '@reduxjs/toolkit';
import { FunctionComponent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TopAppBar from '../../components/TopAppBar';
import { blogToCard } from '../../components/blog/BlogViewCard';
import Carousel from '../../components/blog/carousel';
import {
  Blog,
  fetchBlogs,
  getBlogsError,
  getBlogsStatus,
  selectAllBlogs,
} from '../../redux/BlogsReducer';
import { selectUser } from '../../redux/UserAuthenticationReducer';

interface BlogHomeProps {
  children?: React.ReactNode;
}

const blogCards = [
  {
    image: '/blog/1.1.jpg',
    title: 'Home Decoration',
  },
  {
    image: '/ShopBy/hardware.jpg',
    title: 'DIY Projects',
  },
  {
    image: '/blog/1.3.jpg',
    title: 'Lifestyle & Wellness',
  },
  {
    image: '/blog/1.4.jpg',
    title: 'Gardening & Outdoors',
  },
  {
    image: '/blog/1.5.jpg',
    title: 'Technology & Gadgets',
  },
  {
    image: '/blog/1.6.jpg',
    title: 'Architecture & Design',
  },
];

const BlogHome: FunctionComponent<BlogHomeProps> = () => {
  const dispatch: ThunkDispatch<Blog[], void, AnyAction> = useDispatch();

  const Blogs = useSelector(selectAllBlogs);
  const BlogsStatus = useSelector(getBlogsStatus);
  const BlogsError = useSelector(getBlogsError);

  useEffect(() => {
    if (BlogsStatus === 'idle') {
      dispatch(fetchBlogs());
    }
  }, [BlogsStatus, dispatch]);

  useEffect(() => {
    if (BlogsError !== null && BlogsError) {
      console.log('Blog fetching error!');
    }
  }, [BlogsError]);

  const [showMyBlogs, setShowMyBlogs] = useState(false);

  const userInfo = useSelector(selectUser);

  const filteredBlogs = Blogs.filter((blog) => {
    if (showMyBlogs) {
      return blog.createdBy === userInfo?.id;
    }
    return true;
  });

  return (
    <>
      <TopAppBar />
      <Carousel cards={blogCards} />
      <Container>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            margin: '20px',
          }}
        >
          {userInfo && (
            <button
              style={{
                backgroundColor: showMyBlogs ? '#804000' : 'transparent',
                border: '1px solid #804000',
                borderRadius: '4px',
                color: showMyBlogs ? '#fff' : '#804000',
                cursor: 'pointer',
                marginRight: '10px',
                padding: '5px 10px',
              }}
              onClick={() => setShowMyBlogs(true)}
            >
              My Blogs
            </button>
          )}
          <button
            style={{
              backgroundColor: showMyBlogs ? 'transparent' : '#804000',
              border: '1px solid #804000',
              borderRadius: '4px',
              color: showMyBlogs ? '#804000' : '#fff',
              cursor: 'pointer',
              padding: '5px 10px',
            }}
            onClick={() => setShowMyBlogs(false)}
          >
            All Blogs
          </button>
        </div>
        {filteredBlogs.length > 0 ? (
          <Box
            display={'flex'}
            flexWrap={'wrap'}
            gap="20px"
            justifyContent="center"
          >
            {filteredBlogs.map(blogToCard)}
          </Box>
        ) : (
          <div
            style={{
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column',
              height: 'calc(100vh - 300px)',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <SentimentVeryDissatisfiedIcon
              style={{ color: '#999', fontSize: 80 }}
            />
            <Typography
              style={{ color: '#999', marginTop: '20px' }}
              variant="h6"
            >
              There is nothing here...
            </Typography>
          </div>
        )}
      </Container>
    </>
  );
};

export default BlogHome;
