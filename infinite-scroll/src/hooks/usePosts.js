import { useState, useEffect } from "react";
import { getPostsPage } from "../api/axios"


const usePosts = (pageNum = 1) => {
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState({})
    const [isError, setIsError] = useState(false)
    const [hasNextPage, setHasNextPage] = useState(false)

    useEffect(() => {
        setLoading(true)
        setIsError(false)
        setError({})

        const controller = new AbortController()
        const { signal } = controller

        getPostsPage(pageNum, {signal})
        .then(data => {
            
        })


    })
    

  return  {loading, isError, error, results, hasNextPage}
};

export default usePosts
