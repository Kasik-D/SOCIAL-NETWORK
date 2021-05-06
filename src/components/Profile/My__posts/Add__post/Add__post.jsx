import React from "react";
import "./Add__post.css";

const Add__post = (props) => {
  const newPostElement = React.createRef();

  const addPost = () => {
    props.addPost();
  };

  const OnChangeProfileInput = () => {
    props.ChangeProfileInput(newPostElement.current.value);
  };

  return (
    <div className="add__post">
      <div className="add__post__input">
        <textarea
          name=""
          id=""
          cols="40"
          rows="5"
          ref={newPostElement}
          onChange={OnChangeProfileInput}
          value={props.ProfileInput}
        ></textarea>
      </div>
      <div className="add__post__button">
        <button>
          <a onClick={addPost}>Add post</a>
        </button>
      </div>
    </div>
  );
};

export default Add__post;
