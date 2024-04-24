import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store"

const CreatePost = () => {

    const {addPost} = useContext(PostList);

    const userIdElement = useRef();
    const postTitleElement = useRef();
    const postBodyElement = useRef();
    const reactionsElement = useRef();
    const tagsElement = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const userId = userIdElement.current.value;
        const postTitle = postTitleElement.current.value;
        const postBody = postBodyElement.current.value;
        const reactions = reactionsElement.current.value;
        const tags = tagsElement.current.value.split(" ");

        fetch('https://dummyjson.com/posts/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          
          title:postTitle,
          body:postBody,
          reactions:reactions,
          userId:userId,
          tags:tags
      })
        }).then(res => res.json()).then(post => addPost(post));
        
    }

    return(
    <form className="create-post" onSubmit={handleSubmit}>

    <div className="mb-3">
    <label htmlFor="userId" className="form-label">User ID</label>
    <input type="text" ref={userIdElement} className="form-control" id="title" aria-describedby="emailHelp" placeholder="Your User ID"/>
    </div>

    <div className="mb-3">
    <label htmlFor="title" className="form-label">Post Title</label>
    <input type="text" ref={postTitleElement} className="form-control" id="title" aria-describedby="emailHelp" placeholder="What is on your mind..."/>
    </div>

    <div className="mb-3">
    <label htmlFor="body" className="form-label">Post Descriptin</label>
    <textarea type="text" ref={postBodyElement} rows="4" className="form-control" id="body" placeholder="Tell us more about it..."/>
    </div>

    <div className="mb-3">
    <label htmlFor="reactions" className="form-label">Reactions</label>
    <input type="text" ref={reactionsElement} className="form-control" id="reactions" aria-describedby="emailHelp" placeholder="How many People reacted to this"/>
    </div>

    <div className="mb-3">
    <label htmlFor="tags" className="form-label">Tags</label>
    <input type="text" ref={tagsElement} className="form-control" id="tags" aria-describedby="emailHelp" placeholder="Enter tags here using space"/>
    </div>

  <button type="submit" className="btn btn-primary">Post</button>
    </form>

);
}

export default CreatePost;
