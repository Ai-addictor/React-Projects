import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PL } from "../store/post-list-store";
import WelcomeMesage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {

    const {postList, fetching} = useContext(PL)
    
    return(
        <>
        {fetching && <LoadingSpinner/>}
        {!fetching && postList.length === 0 && <WelcomeMesage/>}
        {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
        </>
    );
}

export default PostList;