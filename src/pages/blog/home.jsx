import { useState } from "react";
import CusBar from "../../components/CusTopBar";
import BlogCard from "../../components/blog/card";
import Carousel from "../../components/blog/carousel";
import Typography from '@mui/material/Typography';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

export default function Home() {
  const blogData = [
    {
        image: "/blog/1.jpg",
        title: "Estructura Furnitures",
        content: "Discover elegant and functional furniture designs. Explore modern sofas, dining sets, and storage solutions crafted with precision and style.",
        author: "S. Akarawita",
        date: "1st January 2024",
        avatar: "User/user.png",
    },
    {
        image: "/blog/2.jpg",
        title: "Gardening Tips",
        content: "Transform your outdoor space with expert gardening advice. Learn about soil preparation, plant selection, and smart watering techniques.",
        author: "P. Guruge",
        date: "15th February 2024",
        avatar: "User/user.png",
    },
    {
        image: "/blog/3.jpg",
        title: "Bathware Trends",
        content: "Stay updated with the latest bathware trends. Explore sleek fixtures, vanities, and spa-like accessories for a stylish bathroom upgrade.",
        author: "S. Umayangana",
        date: "1st March 2024",
        avatar: "User/user.png",
    },
    {
        image: "/blog/4.jpg",
        title: "Hardware Essentials",
        content: "Find essential hardware components for DIY projects. Learn about screws, nails, hinges, and knobs for cabinets, doors, and furniture.",
        author: "D. Vithanage",
        date: "21st April 2024",
        avatar: "User/user.png",
    },
    {
        image: "/blog/5.jpg",
        title: "Architects' Showcase",
        content: "Discover visionary architects and buildings. Explore urban plans, structural marvels, and the artistry behind architectural masterpieces.",
        author: "P. Guruge",
        date: "31st July 2024",
        avatar: "User/user.png",
    },
    {
        image: "/blog/6.jpg",
        title: "Designers' Picks",
        content: "Get inspired by top interior designers' selections. Explore furnishings, color palettes, and décor styles that elevate any space.",
        author: "N. Samarakoon",
        date: "14th May 2024",
        avatar: "User/user.png",
    }
    
  ];

  const blogcards = [
    {
      image: "/blog/1.1.jpg",
      title: "Home Decoration",
    },
    {
      image: "/ShopBy/hardware.jpg",
      title: "DIY Projects",
    },
    {
      image: "/blog/1.3.jpg",
      title: "Lifestyle & Wellness",
    },
    {
      image: "/blog/1.4.jpg",
      title: "Gardening & Outdoors",
    },
    {
      image: "/blog/1.5.jpg",
      title: "Technology & Gadgets",
    },
    {
      image: "/blog/1.6.jpg",
      title: "Architecture & Design",
    },
  ];
  

  const [showMyBlogs, setShowMyBlogs] = useState(true);

  // Filter blogs to show only "My Blogs" if the showMyBlogs state is true
  const filteredBlogs = showMyBlogs
    ? blogData.filter((blog) => blog.author === "P. Guruge") // Replace "YourUserName" with your actual username
    : blogData;


  return (
    <>
      <CusBar />
      <Carousel cards={blogcards} />

      <div style={{ margin: "20px", display: "flex", justifyContent: "flex-end" }}>
        <button
          style={{
            marginRight: "10px",
            backgroundColor: showMyBlogs ? "#804000" : "transparent",
            color: showMyBlogs ? "#fff" : "#804000",
            border: "1px solid #804000",
            borderRadius: "4px",
            padding: "5px 10px",
            cursor: "pointer",
          }}
          onClick={() => setShowMyBlogs(true)}
        >
          My Blogs
        </button>
        <button
          style={{
            backgroundColor: showMyBlogs ? "transparent" : "#804000",
            color: showMyBlogs ? "#804000" : "#fff",
            border: "1px solid #804000",
            borderRadius: "4px",
            padding: "5px 10px",
            cursor: "pointer",
          }}
          onClick={() => setShowMyBlogs(false)}
        >
          All Blogs
        </button>
      </div>

      <div
        style={{
          backgroundColor: "#f9f9f9",
          padding: "10px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          gap: "20px",
        }}
      >
      {filteredBlogs.length === 0 ? (
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: 'calc(100vh - 300px)' }}>
            <SentimentVeryDissatisfiedIcon style={{ fontSize: 80, color: '#999' }} />
            <Typography variant="h6" style={{ color: '#999', marginTop: '20px' }}>
              There is nothing here...
            </Typography>
          </div>
        ) : (
          filteredBlogs.map((blog) => (
            <BlogCard
              key={blog.title}
              image={blog.image}
              title={blog.title}
              content={blog.content}
              author={blog.author}
              date={blog.date}
              avatar={blog.avatar}
            />
          ))
        )}
      </div>
    </>
  );
}
