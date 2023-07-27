import { useState } from "react";
import CusBar from "../../components/CusTopBar";
import BlogCard from "../../components/blog/card";
import Carousel from "../../components/blog/carousel";
import Typography from "@mui/material/Typography";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import API from "../../lib/API";

const User_ID = 1;
const IMAGE_SOURCE = "http://127.0.0.1:5000/blog-files/"

const blogData = Array.from(await API.get("/blogs/all")
  .then((res) => res.data)
  .catch((err) => {
    console.log(err);
    return [];
  }));

console.log(blogData);
export default function Home() {
  const blogCards = [
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
        style={{ margin: "20px", display: "flex", justifyContent: "flex-end" }}
      >
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
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              height: "calc(100vh - 300px)",
            }}
          >
            <SentimentVeryDissatisfiedIcon
              style={{ fontSize: 80, color: "#999" }}
            />
            <Typography
              variant='h6'
              style={{ color: "#999", marginTop: "20px" }}
            >
              There is nothing here...
            </Typography>
          </div>
        ) : (
          filteredBlogs.map((blog) => (
            <BlogCard
              key={blog.title}
              image={IMAGE_SOURCE+blog.id+"/"+blog.mainImage}
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
