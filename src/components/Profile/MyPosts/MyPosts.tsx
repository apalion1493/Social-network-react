import s from './MyPosts.module.css';
import {Post} from "./Post/Post";

const MyPosts = () => {
  return (
      <div>
          <h3 className={s.title}>My Posts</h3>
          <div className={s.wrapper}>
              <textarea className={s.textarea} placeholder="your news..."/>
              <button className={s.button}>Send</button>
          </div>
          <div className={s.postList}>
              <Post likeCount={1} message={'text 1'}/>
              <Post likeCount={3} message={'text 2'}/>
              <Post likeCount={1} message={'text 3'}/>
              <Post likeCount={5} message={'text 4'}/>
          </div>
      </div>
  )
}

export default MyPosts