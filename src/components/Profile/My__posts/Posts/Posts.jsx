import "./Posts.css";
import Post from "./Post/Post";

const Posts = (props) => {
  return (
    <div className="posts">
      {props.postsData.map((el) => {
        return <Post massage={el.massage} id={el.id} key={el.id} />;
      })}
    </div>
  );
};

export default Posts;
