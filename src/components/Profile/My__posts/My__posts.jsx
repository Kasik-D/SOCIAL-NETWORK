import Add__postContainer from "./Add__post/Add__postContainer";
import "./My__posts.css";
import PostsContainer from "./Posts/PostsContainer";

const My__posts = (props) => {
  return (
    <div className="main__posts">
      <Add__postContainer />
      <PostsContainer />
    </div>
  );
};

export default My__posts;
