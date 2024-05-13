
import BlogCard from '../Components/BlogCard'
import Appbar from '../Components/Appbar'

import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import { useBlogs } from '../hooks';

const Blogs = () => {
  const {loading, blogs} = useBlogs();

  if(loading){
    return <div className='flex justify-center items-center w-full h-screen'>
        <Animations/>
    </div>
  }
  return (
   <div>
    <Appbar/>
    <div className='flex justify-center p-4'>
   
   <div className='max-w-xl'>
      {blogs.map(blog => <BlogCard 
        authorName={blog.author.name || "Anonymous"}
        title={blog.title}
        content={blog.content}
        publishedData={"2 feb 2024"}  
      />
    )}
 </div>
 </div>
   </div>
  )
}

 function Animations() {
  return (
    <Box sx={{ width:500}}>
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
    </Box>
  );
}

export default Blogs

