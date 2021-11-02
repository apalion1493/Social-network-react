import s from './MyPosts.module.css';
import {Post} from "./Post/Post";

const MyPosts = () => {
    const postData = [
        {id: 1, like: 1, message: 'text 1'},
        {id: 2, like: 3, message: 'text 2'},
        {id: 3, like: 1, message: 'text 3'},
        {id: 4, like: 5, message: 'text 4'},
    ];

  return (
      <div>
          <h3 className={s.title}>My Posts</h3>
          <div className={s.wrapper}>
              <textarea className={s.textarea} placeholder="your news..."/>
              <button className={s.button}>Send</button>
          </div>
          <div className={s.postList}>
              {
                  postData.map(t => <Post id={t.id} likeCount={t.like} message={t.message}/>)
              }
          </div>
      </div>
  )
}

export default MyPosts