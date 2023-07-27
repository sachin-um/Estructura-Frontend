import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

import CusBar from '../../components/CusTopBar';
import BlogCard from '../../components/blog/card';
import Carousel from '../../components/blog/carousel';
import API from '../../lib/API';

const User_ID = 1;
const IMAGE_SOURCE = 'http://127.0.0.1:5000/blog-files/';

const blogData = Array.from(
  await API.get('/blogs/all')
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
      return [];
    }),
);

console.log(blogData);
export default function Home() {
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

  const [showMyBlogs, setShowMyBlogs] = useState(true);

  console.log(blogData);
  // Filter blogs to show only "My Blogs" if the showMyBlogs state is true
  let filteredBlogs = showMyBlogs
    ? blogData.filter((blog) => blog.createdBy === User_ID) // Replace User_ID
    : blogData;

  console.log(filteredBlogs);

  return (
    <>
      <CusBar />
      <Carousel cards={blogCards} />

      <div
        style={{ display: 'flex', justifyContent: 'flex-end', margin: '20px' }}
      >
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
        {filteredBlogs.length === 0 ? (
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
        ) : (
          filteredBlogs.map((blog) => (
            <BlogCard
              author={blog.author}
              avatar={blog.avatar}
              content={blog.content}
              date={blog.date}
              image={IMAGE_SOURCE + blog.id + '/' + blog.mainImage}
              key={blog.title}
              title={blog.title}
            />
          ))
        )}
      </div>
    </>
  );
}
