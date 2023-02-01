import { Link } from "react-router-dom";

import "./PostDetail.css"

const PostDetail = ({ post }) => {
  return (
    <div className='posts'>
      <img className='img' src={post.image} alt={post.title} />
      <h2>{post.title}</h2>
      <p>por: {post.createdBy}</p>
      <div className='tags's>
        {post.tags.map((tag) => (
          <p key={tag}>
            <span>#</span>
            {tag}
          </p>
        ))}
      <Link to={`/posts/${post.id}`} className="btn btn-outline">
        Ler
      </Link>
      </div>
    </div>
  );
};

export default PostDetail;