import { useRef, useCallback } from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import Post from "./Post"
import { useInfiniteQuery } from "react-query";
import { getPostsPage } from "./api/axios";

const Example2 = () => {
    const {fetchNextPage, hasNextPage, isFetchingNextPage, data, status, error} =
    useInfiniteQuery()
  const intObserver = useRef()

  const lastPostRef = useCallback ((post) => {
    if (loading) return

    if (intObserver.current) intObserver.current.disconnect()

    const confirmload = () => {
      confirmAlert({
        title: "confirm Load More",
      message: 'Are you sure to Load more posts',
      buttons:[
        {
          label: 'yes',
          onClick: () => {
      setPageNum((prev) => prev + 1)
      }
      },
      {label: 'No'}
    ]
   })
    }

    intObserver.current = new IntersectionObserver((post) => {
      if (post [0]. isIntersecting && hasNextPage) {
      console.log("we are near the last post");
      confirmload()
    // setPageNum(prev => prev + 1 )
}
    }) 

    if (post) intObserver.current.observe(post)
  },
[loading, hasNextPage]
)
if (isError) return <p className="center">Error : {error.message}</p>;

  const content = results.map((post, i) =>{
    if (results.length === i + 1) {

    return <Post ref= {lastPostRef} key={post.id} post= {post} />

    }
    return <Post key={post.id} post= {post} />
  })

  return (
    <>
      <h1 id="top">
        &infin; Infinite Query &amp; Scroll
        <br />
        &infin; Ex. 1 - React Only
      </h1>

      {content}
      
      <p className="center">Loading more posts...</p>

      <p className="center">
        <a href="#top">Back to Top</a>
      </p>
    </>
  );
};

export default Example2;
