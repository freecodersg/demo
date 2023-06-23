import { Box, Divider, Typography } from '@mui/material';
import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom'

const SingleBlog = () => {
    const { id} = useParams();
    const [blogs, setBlogs] = React.useState({});
    const getSingleBlog = async() => {
        const res = await axios.get(
            `https://648fc6781e6aa71680ca113d.mockapi.io/demo/demo/${id}`

        );
        setBlogs(res.data);
    };
    React.useEffect(() => {
        getSingleBlog();
      }, []);
    
  return (
    <div>
        <Box>
        <Typography variant="h3" sx={{ pt: 3, pb: 2, textAlign: "center" }}>
          {blogs.title}
        </Typography>

        <img src={blogs.image} style={{ width: "100%", height: "500px" }} />
        <Typography sx={{ pt: 3, pb: 2 }}>@{blogs.author}</Typography>
        <Divider />
        <Typography sx={{ pt: 3 }}>{blogs.descripton}</Typography>
        </Box>
    </div>
  )
}

export default SingleBlog