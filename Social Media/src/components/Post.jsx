import { useContext } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { PostList } from "../store/post-list-store";

const Post = ({post}) => {

  const {deletePost} = useContext(PostList)

    return(
    <div className="card post-card">
    <div className="card-body">
    <h5 className="card-title">{post.title}
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>deletePost(post.id)}>
    <RiDeleteBin6Line />
    
    </span>
    </h5>
    <p className="card-text">{post.body}</p>
    {post.tags.map((tag) => <span key={tag}className="badge text-bg-primary hashtag">{"#"+tag}</span>)}
    <div className="alert alert-success reaction" role="alert">
      this post has been liked by {post.reactions} friends!
    </div>
    
  </div>
</div>
    )
}

export default Post