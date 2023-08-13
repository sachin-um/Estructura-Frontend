import type { FunctionComponent } from 'react';

import { Avatar, Box, Button, CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

import '../../assets/font.css';
import TimeAgo from '../TimeAgo';

interface BlogCardProps {
  author: string;
  avatar: string;
  content: string;
  date: Date;
  id: number;
  imageAlt: string;
  imageSrc: string;
  title: string;
}

const BlogViewCard: FunctionComponent<BlogCardProps> = ({
  author,
  avatar,
  content,
  date,
  id,
  imageAlt,
  imageSrc,
  title,
}) => {
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        '&:hover': {
          transform: 'translateY(-4px)',
        },
        borderRadius: '15px',
        transition: 'transform 0.2s',
        width: 345,
      }}
    >
      <CardActionArea>
        <Box sx={{ borderRadius: '12px', margin: '15px', overflow: 'hidden' }}>
          <CardMedia
            style={{
              objectFit: 'cover',
              width: '100%',
            }}
            alt={imageAlt}
            component="img"
            height="200"
            src={imageSrc}
          />
        </Box>
        <CardContent>
          <Typography
            component="div"
            gutterBottom
            sx={{ fontFamily: 'Poppins' }}
            variant="h5"
          >
            {title} {/* Use the title prop */}
          </Typography>
          <Typography
            color="text.secondary"
            sx={{ fontFamily: 'Poppins' }}
            variant="body2"
          >
            {content.substring(0, 50)}...
            {/* Use the content prop */}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Box
        alignItems="center"
        display="flex"
        justifyContent="space-between"
        p={2}
      >
        <Box alignItems="center" display="flex">
          <Avatar src={avatar} /> {/* Use the avatar prop */}
          <Box ml={1}>
            <Typography color="text.secondary" fontSize={14} variant="body2">
              {author} {/* Use the author prop */}
            </Typography>
            <Typography color="text.secondary" fontSize={12} variant="body2">
              <TimeAgo timestamp={date} /> {/* Use the date prop */}
            </Typography>
          </Box>
        </Box>
        <Button
          onClick={() => {
            navigate(`/blogs/${id}`);
          }}
          color="primary"
          size="small"
          variant="contained"
        >
          View Blog
        </Button>
      </Box>
    </Card>
  );
};

export default BlogViewCard;

export const blogToCard: FunctionComponent<Blog> = (blog) => {
  return (
    <BlogViewCard
      author={blog.creatorName}
      avatar={blog.mainImage}
      content={blog.content}
      date={blog.dateAdded}
      id={blog.id}
      imageAlt={blog.mainImage}
      imageSrc={`http://localhost:8080/files/blog-files/${blog.createdBy}/${blog.id}/${blog.mainImageName}`}
      key={blog.id}
      title={blog.title}
    />
  );
};
