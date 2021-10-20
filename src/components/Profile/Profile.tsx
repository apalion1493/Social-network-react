import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <section className={s.content}>
            <img className={s.content__image} src="https://readd.org/wp-content/uploads/2020/06/photo-1540051834522-7248234b9b4d.jpg.webp" alt=""/>
            <div>
                ava + desc
            </div>
            <MyPosts/>
        </section>
    )
}

export default Profile