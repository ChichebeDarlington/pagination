import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import Post from "./Post";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      console.log(data);
      setPosts(data);
    };
    fetchPost();
  }, []);

  //   get current posts
  const indexOfLastPosts = currentPage * postsPerPage;
  const indexOfFirstPosts = indexOfLastPosts - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPosts, indexOfLastPosts);

  //   paginate
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Post posts={currentPosts} />
      <Pagination
        totalPosts={posts.length}
        postsPerPage={postsPerPage}
        paginate={paginate}
      />
    </div>
  );
};

export default Posts;
