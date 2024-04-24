import { createContext, useReducer, useState, useEffect } from "react";

export const PostList = createContext({
    postList: [],
    addPost: () => {},
    addInitialPosts: () => {},
    deletePost: () => {},
    fetching: false
});

const PostListReducer = (currPostList, action) => {
    let newPostList = currPostList
    if(action.type === "DELETE_POST"){
        newPostList = currPostList.filter(post => post.id !==action.payload.postId)
    }
    else if(action.type === "ADD_INITIAL_POSTS"){
        newPostList = action.payload.posts
    }
    else if(action.type === "ADD_POST"){
        newPostList = [action.payload,...currPostList]
    }
    return newPostList;
}

const PostListProvider = ({children}) => {

    const [fetching,setFetching] = useState(false)
    const addPost = (post) => {
        dispatchPostList({
            type:"ADD_POST",
            payload: post
        });
    }
    const addInitialPosts = (posts) => {
        dispatchPostList({
            type:"ADD_INITIAL_POSTS",
            payload: {posts}
        })
    }
    const deletePost = (postId) => {
        dispatchPostList({
            type:"DELETE_POST",
            payload: {
                postId
            }
        })
    }
    useEffect(()=>{
        setFetching(true)
        fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        .then(data => {addInitialPosts(data.posts)
        setFetching(false)
        });
        
    },[]);
    const [postList,dispatchPostList] = useReducer(PostListReducer,[])

    return <PostList.Provider value={{
        postList,
        addPost,
        addInitialPosts,
        deletePost,
        fetching
        
    }}>{children}</PostList.Provider>
}


export default PostListProvider;