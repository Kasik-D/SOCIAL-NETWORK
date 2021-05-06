import styles from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={styles.post}>
      <div className={styles.post__photo}>
        <img
          src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-512.png"
          alt=""
        />
      </div>
      <div className={styles.post__text}>
        <p>{props.massage}</p>
      </div>
    </div>
  );
};

export default Post;
