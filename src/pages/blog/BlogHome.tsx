import type { FunctionComponent } from 'react';

import { Box, Container, Grid, Pagination, Stack } from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import NotFound from '../../components/NoResults';
import TopAppBar from '../../components/TopAppBar';
import { blogToCard } from '../../components/blog/BlogViewCard';
import Carousel from '../../components/blog/carousel';
import { useBlogs } from '../../redux/Blogs/useBlogs';
import { selectUser } from '../../redux/UserAuthenticationReducer';
import Paginate from '../../utils/Paginate';

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
  const { blogs } = useBlogs();

  const [showMyBlogs, setShowMyBlogs] = useState(false);

  const userInfo = useSelector(selectUser);

  const filteredBlogs = blogs.filter((blog) => {
    if (showMyBlogs) {
      return blog.createdBy === userInfo?.id;
    }
    return true;
  });

  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(9);

  const paginatedBlogs = Paginate(filteredBlogs, pageNumber, pageSize);

  const navigate = useNavigate();

  return (
    <>
      <TopAppBar />
      <Carousel cards={blogCards} />
      <div
        style={{
          alignItems: 'center', // Align buttons vertically
          display: 'flex',
          justifyContent: 'space-between',
          margin: '20px',
        }}
      >
        <Grid alignItems="center" container justifyContent="flex-end">
          <Grid item>
            {userInfo && (
              <button
                onClick={() => {
                  if (!showMyBlogs) {
                    setPageNumber(1);
                  }
                  setShowMyBlogs(true);
                }}
                style={{
                  backgroundColor: showMyBlogs ? '#804000' : 'transparent',
                  border: '1px solid #804000',
                  borderRadius: '4px',
                  color: showMyBlogs ? '#fff' : '#804000',
                  cursor: 'pointer',
                  marginRight: '10px',
                  padding: '5px 10px',
                }}
              >
                My Blogs
              </button>
            )}
          </Grid>
          <Grid item>
            <button
              onClick={() => {
                if (showMyBlogs) {
                  setPageNumber(1);
                }
                setShowMyBlogs(false);
              }}
              style={{
                backgroundColor: showMyBlogs ? 'transparent' : '#804000',
                border: '1px solid #804000',
                borderRadius: '4px',
                color: showMyBlogs ? '#804000' : '#fff',
                cursor: 'pointer',
                padding: '5px 10px',
              }}
            >
              All Blogs
            </button>
          </Grid>
          <Grid item>
            {userInfo && (
              <button
                onClick={() => {
                  navigate('/blogs/add');
                }}
                style={{
                  backgroundColor: 'transparent',
                  border: '1px solid #804000',
                  borderRadius: '4px',
                  color: '#804000',
                  cursor: 'pointer',
                  marginLeft: '10px',
                  padding: '5px 10px',
                }}
              >
                Write a new blog
              </button>
            )}
          </Grid>
        </Grid>
      </div>
      <Container sx={{ paddingBottom: '2rem' }}>
        {filteredBlogs.length > 0 ? (
          <Stack spacing={3}>
            <Box
              display={'flex'}
              flexWrap={'wrap'}
              gap="20px"
              justifyContent="center"
            >
              {paginatedBlogs.map(blogToCard)}
            </Box>
            <Box display={'flex'} justifyContent={'center'}>
              <Pagination
                onChange={(_event, value) => {
                  setPageNumber(value);
                }}
                count={Math.ceil(filteredBlogs.length / pageSize)}
              />
            </Box>
          </Stack>
        ) : (
          <NotFound />
        )}
      </Container>
    </>
  );
};

export default BlogHome;
