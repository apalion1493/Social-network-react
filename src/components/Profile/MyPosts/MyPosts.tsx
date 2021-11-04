import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import React from "react";

export type PostsType = {
    posts: Array<PostType>
}

export type PostType = {
    id: number
    like: number
    message: string
}

const MyPosts: React.FC<PostsType> = (props) => {
  return (
      <div>
          <h3 className={s.title}>My Posts</h3>
          <div className={s.wrapper}>
              <textarea className={s.textarea} placeholder="your news..."/>
              <button className={s.button}>Send</button>
          </div>
          <div className={s.postList}>
              { props.posts.map((p: PostType) => <Post id={p.id} likeCount={p.like} message={p.message}/>) }
          </div>
      </div>
  )
}

export default MyPosts
